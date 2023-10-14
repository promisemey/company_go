<template>
	<view v-if="detail">
		<view class="text-center">
			<image class="cu-avatar round xl margin-tb" :src="detail.brandLogo" mode=""></image>
			<view class="text-lg">
				<!-- 前端开发工程师 -->
				{{detail.jobName}}
			</view>
			<view class="text-orange margin-tb-sm">
				薪资待遇：{{detail.salaryDesc}}
			</view>
		</view>

		<view class="flex justify-around margin">
			<view class="">
				<image class="cu-avatar round margin-right-sm" src="../../static/img/job_icon1.png" mode=""></image>
				{{distance}}km
			</view>

			<view class="">
				<image class="cu-avatar round margin-right-sm" src="../../static/img/job_icon2.png" mode=""></image>
				{{detail.cityName}} · {{detail.areaDistrict}}
			</view>
		</view>


		<view class="flex justify-around margin-tb">
			<view class="">
				岗位详情
			</view>
			<view class="">
				企业信息
			</view>
		</view>

		<view class="padding">
			<view class="margin-bottom-sm">
				经验要求
			</view>
			<view class="">
				<view class="cu-tag bg-cyan" v-for="(item,index) in detail.jobLabels" :key="index">
					{{item}}
				</view>
			</view>
		</view>

		<view class="padding">
			<view class="margin-bottom-sm">
				技能要求
			</view>
			<view class="">
				<view class="cu-tag bg-orange" v-for="(item,index) in detail.skills" :key="index">
					{{item}}
				</view>
			</view>
		</view>

		<view class="padding">
			<view class="margin-bottom-sm">
				福利待遇
			</view>
			<view class="">
				<view class="cu-tag bg-purple" v-for="(item,index) in detail.welfareList" :key="index">
					{{item}}
				</view>
			</view>
		</view>

		<view class="padding">
			<view class="margin-bottom-sm">
				公司位置
			</view>
			<!-- 地图组件 -->
			<map class="gd-map" :latitude="jobLocation[1]" :longitude="jobLocation[0]" :polyline="line" :markers="[{
        id:1,
				size:'mid',
				color:'purple',
				iconPath:'../../static/img/loc.png',
        longitude:jobLocation[0],
        latitude:jobLocation[1],
        width:30,
        height:30
      },{
        id:2,
				size:'mid',
				color:'purple',
				iconPath:'../../static/img/loc.png',
        longitude:lnglat[0],
        latitude:lnglat[1],
        width:30,
        height:30
      }]"></map>
		</view>

		<view class="padding cu-bar foot">
			<button v-if="state==0" @click="handleJoin" class="cu-btn bg-orange lg block">立即报名</button>
			<button v-if="state==1" class="cu-btn bg-grey lg block">等待审核</button>
			<button v-if="state==2" class="cu-btn bg-brown lg block">已读简历</button>
			<button v-if="state==3" class="cu-btn bg-cyan lg block">预约面试</button>
			<button v-if="state==4" class="cu-btn bg-red lg block">已经拒绝</button>
		</view>


	</view>
</template>

<script>
	import {
		companyDetail,
		companyApply,
		applyStateGet
	} from '../../api/company.js'
	import {
		mapState
	} from 'vuex'
	import {
		getDistance
	} from '../../utils/tools.js'
	export default {
		data() {
			return {
				detail: {},
				distance: 0,
				jobLocation: [],
				state: 0,
				line: [{
					arrowLine: true,
					color: '#27bd09e6',
					width: 8,
					points: []
				}]
			}
		},
		computed: {
			...mapState({
				lnglat: state => state.location.lnglat,
				userInfo: state => state.user.userInfo
			})
		},
		onLoad(options) {
			companyDetail(options.id).then(res => {
				this.detail = res.data;
				let {
					cityName,
					areaDistrict,
					city,
					businessDistrict
				} = res.data
				let address = cityName + areaDistrict
				this.getDist(address, city)

			})

			this.checkState(options.id); // 获取报名状态
		},
		methods: {
			getDist(address, city) {
				const url = `https://restapi.amap.com/v3/geocode/geo?address=${address}&key=bdcb713505916c92f9cb7ac751b8579d`
				uni.request({
					url,
					success: (res) => {
						console.log('=>>>', res);
						let {
							location
						} = res.data.geocodes[0]
						location = location.split(',')
						this.jobLocation = location
						this.distance = getDistance(location, this.lnglat).toFixed(1)

						let point = [{
								'latitude': location[1],
								'longitude': location[0]
							},
							{
								'latitude': this.lnglat[1],
								'longitude': this.lnglat[0]
							}
						]

						console.log('--------');
						this.line = [{
							arrowLine: true,
							color: '#27bd09e6',
							width: 8,
							points: point
						}]
						console.log(this.line, '-----');

					}
				})
			},
			// 立即报名 点击事件
			handleJoin() {
				// 如果没有登录，引导到登录页面
				if (!this.userInfo) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}
				// 信息不完善，引导完善个人信息
				let {
					name,
					phone,
					resume
				} = this.userInfo;
				if (!name || !phone || !resume) {
					uni.showModal({
						title: '个人信息不完善',
						content: '请先完善个人信息后再进行报名操作',
						confirmColor: 'orange',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/setting/setting'
								})
							}
						}

					})
					return
				}

				// 发起报名请求，保存数据到数据库中
				let userId = this.userInfo.objectId
				let jobId = this.detail.objectId
				let {
					brandLogo,
					brandName,
					jobName,
					cityName,
					areaDistrict,
					salaryDesc
				} = this.detail

				companyApply({
					userId,
					jobId,
					brandLogo,
					brandName,
					jobName,
					cityName,
					areaDistrict,
					salaryDesc,
					status: 1
				}).then(res => {
					// 报名成功，修改状态为1
					this.state = 1;
					console.log(res, "发起报名请求，保存数据到数据库中");
				})
			},
			// 获取报名状态
			checkState(jobid) {
				applyStateGet(this.userInfo.userid, jobid).then(res => {
					let {
						results
					} = res.data;
					if (results.length) {
						this.state = results[0].state //用户端报名状态保持跟后端一致
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.lg {
		width: 100%;
	}

	.cu-tag {
		margin: 10rpx 10rpx 0 0;
	}

	.gd-map {
		width: 100%;
		height: 600rpx;
		margin-bottom: 100upx;
		// border: 1px solid red;
	}
</style>