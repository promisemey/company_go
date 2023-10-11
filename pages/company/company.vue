<template>
	<view class="company">
		<!-- 数据为空 -->
		<view v-if="empty" class="empty">
			<tn-empty icon="../../static/img/empty.png"></tn-empty>
		</view>
		<!-- 数据为空 -->
		<view class="flex flex-wrap justify-between padding-sm">
			<job-item v-for="item in jobList" :data="item" class="margin-bottom-lg" />
		</view>
	</view>
</template>

<script>
	import {
		companyGet
	} from '../../api/company.js'

	export default {
		data() {
			return {
				jobList: [],
				pageNum: 1,
				cateName: '',
				empty: false
			}
		},
		onTabItemTap() {
			// 清空
			uni.removeStorage({
				key: "cateName",
				success: (res) => {
					this.cateName = ''
					console.log('清空', res);
				}
			})
			this.fetchData()
		},
		onShow() {
			setTimeout(() => {
				uni.getStorage({
					key: "cateName",
					complete: (res) => {
						console.log('提取存储：', res);
						this.jobList = []
						this.pageNum = 1
						this.cateName = res.data
						this.fetchData(res.data)
					},
				})
			})
		},
		// 仅加载一次
		// onLoad() {
		// 	this.fetchData()
		// },
		onReachBottom() {
			console.log('提取：', this.cateName);
			this.fetchData(this.cateName)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.jobList = []
			this.pageNum = 1
			this.fetchData(this.cateName)
		},
		methods: {
			fetchData(name) {
				companyGet(this.pageNum, name).then(res => {

					// 关闭下拉刷新
					uni.stopPullDownRefresh()

					const {
						results
					} = res.data

					// 首屏为空
					if (!results.length) this.empty = true

					if (results.length) {
						this.empty = false
						this.jobList = [...this.jobList, ...results]
						this.pageNum++
						return
					}

					uni.showToast({
						title: "没有更多了",
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.empty {
		overflow: hidden;
		display: flex;
		height: calc(100vh - 140upx);
		align-items: center;
		justify-content: center;
	}
</style>