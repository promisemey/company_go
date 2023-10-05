<template>
	<view class="job-item padding-sm margin-bottom-sm" :class="state">
		<view class="flex justify-between align-center">

			<view class="job-name flex align-center">
				<image class="cu-avatar round margin-right-xs" src="../static/logo.png" mode=""></image>
				公司名称
			</view>
			<text class="iconfont icon-Bookmark text-xxl"></text>
		</view>
		<view class="margin-tb-sm text-lg">
			UI设计师
		</view>
		<!-- 地址 职位类型 -->
		<view :class="['margin-top-sm',state==='new'?'flex ':'margin-bottom-sm']">
			<view class="text-sm">
				重庆,九龙坡
			</view>
			<view :class="['text-orange', 'text-sm',state==='hot'?'margin-tb-xs':'']">
				<text class="margin-xs" v-if="state==='new'">
					·
				</text>
				全职
			</view>
		</view>
		<!-- 地址 职位类型 -->
		<view class="job-desc margin-tb-lg" v-if="state==='new'">
			我们正在寻找项目经理，您可以在这里申请。 良好的多任务处理是这个角色的加分项。
		</view>
		<view class="flex">
			<view class="flex align-center margin-right">
				<text class="margin-right-xs iconfont icon-kehuqunzu text-grey"></text>
				90
			</view>
			<view class="flex align-center">
				<text class="margin-right-xs iconfont icon-yanjing1 text-grey"></text>
				999
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "job-item",
		props: {
			state: {
				type: String,
				default: 'hot',
				validator(value) {
					return ['hot', 'new'].includes(value)
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.job-item {
		border-radius: 8px;
		border: 2upx solid #EEEEEE;
	}

	.hot {
		width: 344upx;
		height: 336upx;
	}
</style>