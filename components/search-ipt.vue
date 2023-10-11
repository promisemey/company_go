<template>
	<view class="search-ipt">
		<!-- 搜索框 -->
		<view class="search flex align-center  solid margin-left-xl margin-right-sm margin-bottom-xl padding-sm">
			<text class="cuIcon-search text-xl padding-lr-sm"></text>
			<input class="basis-xl" type="text" :placeholder="iptData">
		</view>
		<!-- 搜索框 -->
	</view>
</template>

<script>
	export default {
		name: "search-ipt",
		props: {
			iptData: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.search {
		height: 96upx;
	}
</style>