<template>
	<view class="home">
		<view class="flex padding-lg margin-xs  align-center justify-between">
			<!-- 头部 -->
			<view class="">
				您好，
				<view class="text-xxl margin-top-xs">
					XX科技有限公司
				</view>
			</view>
			<text class="iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing text-grey"></text>
			<!-- 头部 -->
		</view>
		<!-- banner -->
		<swiper :duration="1000" circular next-margin="170rpx" class="padding-left-lg margin-left-xs">
			<swiper-item class="out-swiper">
				<view class="swiper-item">
					<image src="../../static/img/1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/img/2.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- banner -->
		<!-- 宫格 -->
		<view class="margin-top-lg cu-list grid col-4 no-border ">
			<view class="flex align-center cu-item" v-for="item in 8">
				<image class="grid-icon" src="../../static/logo.png" mode=""></image>
				<text>设计</text>
			</view>
		</view>
		<!-- 宫格 -->

		<!-- 为你推荐 -->
		<view class="padding-left-lg margin-left-xs ">
			<view class="flex align-center justify-between padding-right-lg margin-right-xs margin-bottom-sm">
				<text class="text-lg text-black">为你推荐</text>
				<text class="text-orange">查看全部</text>
			</view>
			<view class="flex">
				<job-item />
				<job-item />
			</view>
		</view>
		<!-- 为你推荐 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.icon-xiaoxitongzhitixinglingshenglingdang-xianxing {
		font-size: 60upx;
	}

	swiper {

		// ::v-deep .uni-swiper-slides {
		// 	width: 508upx !important;
		// }
	}

	.swiper-item {
		width: 508upx;
		height: 320upx;
		margin-right: 32upx !important;
	}

	.grid-icon {
		width: 64upx;
		height: 64upx;
	}
</style>