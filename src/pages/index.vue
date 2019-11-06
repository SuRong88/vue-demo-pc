<template>
	<div class="index">
		index
	</div>
</template>

<script>
	export default {
		name: 'index',
		created() {
			// this.infoToast('消息提示')
			this.wDialog('标题','内容')
			// this.$errorToast('错误提示',8000)
			// setTimeout(()=>{
			// 	this.$successToast('成功提示',5000)
			// },5000)
		},
		mounted() {},
		data() {
			return {
			};
		},
		computed: {},
		watch: {
		},
		methods: {
		}
	}
</script>

<style>
	.info{
		background-color: #409EFF;
	}
	.icon{
		color: cyan;
	}
</style>
