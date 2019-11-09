<template>
	<div v-if="isShow" class="toast" >
		<span :class="{success:type=='success',error:type=='error'}">{{msg}}</span>
	</div>
</template>

<script>
	name:'toast'
	export default {
		data(){
			return {
				isShow:false,
				msg:'',
				type:'success',
			}
		},
		methods:{
			successToast(msg='成功提示',duration=3000){
				console.log(duration)
				this.isShow = true
				this.msg = msg
				this.type = 'success'
				setTimeout(()=>{
					this.isShow = false
				}, duration);
			},
			errorToast(msg='错误提示',duration=3000){
				console.log(duration)
				this.isShow = true
				this.msg = msg
				this.type = 'error'
				setTimeout(()=>{
					this.isShow = false
				}, duration);
			}
		}
	}
</script>

<style scoped>
	span{
		color: #fff;
		padding:3px 8px;
		font-size: 16px;
		border-radius: 2px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		opacity: 0.7;
	}
	.error{
		background-color: red;
	}
	.success{
		background-color: lawngreen;
	}
</style>
