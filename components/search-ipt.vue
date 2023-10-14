<template>
	<view class="search-ipt">
		<!-- 搜索框 -->
		<view class="search flex align-center solid   padding-sm">
			<text :class="['text-xl padding-lr-sm',icon]"></text>
			<input :value="value" class="basis-xl" type="text" @input="handleInput" :placeholder="iptData">
		</view>
		<!-- 搜索框 -->
	</view>
</template>

<script>
	export default {
		name: "search-ipt",
		props: {
			value: {
				type: [String, Number]
			},
			iptData: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: 'cuIcon-search'
			}
		},
		methods: {
			handleInput(ev) {
				this.$emit('input', ev.target.value)
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