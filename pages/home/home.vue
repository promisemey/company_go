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

		<!-- 搜索框 -->
		<view class="search flex align-center  solid margin-left-xl margin-right-sm margin-bottom-xl padding-sm">
			<text class="cuIcon-search text-xl padding-lr-sm"></text>
			<input class="basis-xl" type="text" placeholder="开始寻找你梦寐以求的工作...">
		</view>
		<!-- 搜索框 -->

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
		<view class=" ">
			<view class="flex align-center justify-between padding-left-xl margin-right-sm  margin-bottom-sm">
				<text class="text-lg text-black">为你推荐</text>
				<text class="text-orange">查看全部</text>
			</view>
			<scroll-view scroll-x class="margin-right-xl">
				<view class="flex justify-between margin-left-xl">
					<job-item v-for="item in 4" class="margin-right-lg shrink" />
				</view>
			</scroll-view>
		</view>
		<!-- 为你推荐 -->

		<!-- 热门职位 -->
		<view class="hot margin-top-sm">
			<view class="flex align-center justify-between padding-left-xl margin-right-sm  margin-bottom-sm">
				<text class="text-lg text-black">热门职位</text>
				<text class="text-orange">查看全部</text>
			</view>
			<scroll-view scroll-x class="margin-right-xl">
				<view class="flex justify-between margin-left-xl">
					<job-item v-for="item in 4" class="margin-right-lg shrink" />
				</view>
			</scroll-view>
		</view>
		<!-- 热门职位 -->

		<!-- 最新职位 -->
		<view class="hot margin-top-sm">
			<view class="flex align-center justify-between padding-left-xl margin-right-sm  margin-bottom-sm">
				<text class="text-lg text-black">最新职位</text>
				<text class="text-orange">查看全部</text>
			</view>

			<view class="flex flex-wrap padding-left-xl padding-right-sm ">
				<job-item v-for="item in 3" state="new" class="margin-bottom-lg" />
			</view>

		</view>
		<!-- 最新职位 -->

		<!-- 最受关注 -->
		<view class="hot margin-top-sm margin-bottom-lg">
			<view class="flex align-center justify-between padding-left-xl margin-right-sm  margin-bottom-sm">
				<text class="text-lg text-black">最受关注</text>
				<text class="text-orange">查看全部</text>
			</view>

			<view class="flex flex-wrap padding-left-xl padding-right-sm ">
				<view v-for="item in 5"
					:class="['flex align-center padding-tb-sm justify-between hot-list margin-top-xs',,item==5?'':'solid-bottom']">
					<!-- 公司头像 -->
					<image class="cu-avatar round sm " src="../../static/logo.png" mode="aspectFill"></image>
					<!-- 公司头像 -->

					<view class="company-desc basis-lg">
						<view class="text-lg text-black ">
							公司名称示例文字
						</view>
						<view class="text-sm text-grey ">
							北京,海淀
						</view>
					</view>
					<!-- 浏览量 -->
					<view class="flex align-center">
						<text class="margin-right-xs iconfont icon-yanjing1 text-grey"></text>
						40k
					</view>
					<!-- 浏览量 -->
				</view>
			</view>

		</view>
		<!-- 最受关注 -->
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

	.search {
		height: 96upx;
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

	.text-black {
		font-weight: 700;
	}

	.shrink {
		flex-shrink: 0 !important;
	}

	.hot-list {
		// width: 327px;
		width: 100%;
		height: 128upx;
	}

	.cu-avatar {
		align-self: flex-start;
		margin-top: 14upx;
	}

	.company-desc {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>