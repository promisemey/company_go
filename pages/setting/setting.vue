<template>
	<view>
		<view class="padding text-center ">
			<image src="../../static/logo.png" class="cu-avatar xl round" mode=""></image>
			<view class="padding-sm">
				<button class="cu-btn line-orange">修改头像</button>
			</view>
		</view>
		<view class="padding">
			<view class="padding-bottom-xs">
				姓名
			</view>
			<search-ipt v-model="name" iptData="请输入昵称" icon="cuIcon-friend"></search-ipt>
		</view>
		<view class="padding">
			<view class="padding-bottom-xs">
				手机号
			</view>
			<search-ipt v-model="phone" iptData="请输入手机号" icon="cuIcon-message"></search-ipt>
		</view>
		<view class="padding">
			<view class="padding-bottom-xs ">
				简历
			</view>
			<button class="cu-btn line-orange block  lg" @click="upload">上传简历</button>

			<view v-if="step" class="cu-progress round striped active margin-top">
				<view class="bg-orange" :style="[{ width:step?`${step}%`:''}]"></view>
			</view>
		</view>
		<view class="flex padding justify-between save">
			<button class="cu-btn">取消</button>
			<button class="cu-btn bg-orange" @click="handleSave">保存</button>
		</view>
	</view>
</template>

<script>
	import {
		pathToBase64
	} from '../../js_sdk/mmmm-image-tools/index.js'
	import CloudSDK from 'leancloud-storage'
	export default {
		data() {
			return {
				name: '小青龙',
				phone: '15955555555',
				resume: '',
				step: 0
			};
		},
		methods: {
			upload() {
				uni.chooseFile({
					success: async (file) => {
						const {
							tempFiles
						} = file
						// 将文件转换为base64编码
						let base64 = await pathToBase64(tempFiles[0].path)
						console.log('文件：', file);
						console.log(base64);

						let cloudFile = new CloudSDK.File('resume.pdf', {
							base64
						})
						// 保存资源
						const result = await cloudFile.save()
						console.log('pdf：', result);
						const {
							url
						} = result.attributes
						this.resume = url
					}
				})
			},
			handleSave() {
				console.log(this.name);
			}
		}
	}
</script>

<style lang="scss">
	.save {

		button {
			width: 40%;
		}
	}
</style>