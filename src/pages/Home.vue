<template>
	<div class="home">
		<v-Header></v-Header>
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import vHeader from "components/common/header.vue"
	import vFooter from "components/common/footer.vue"
	export default{
		name:'home',
		components:{vHeader,vFooter},
		created() {
		
		},
		mounted() {
		
		},
		data() {
			return {
		
			};
		},
		computed: {},
		watch: {},
		methods: {
		
		}
	}
</script>

<style>
</style>
