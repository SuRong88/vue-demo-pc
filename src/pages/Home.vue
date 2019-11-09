<template>
	<div class="home">
		<v-header :fdata = 'father' @fn='fatherHandle'></v-header>
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import vHeader from "components/common/header.vue"
	import vFooter from "components/common/footer.vue"
	export default {
		name: 'home',
		components: {
			vHeader,
			vFooter
		},
		created() {

		},
		mounted() {

		},
		data() {
			return {
				father: 'father'
			};
		},
		computed: {},
		watch: {},
		methods: {
			fatherHandle(data) {
				console.log(data)
			}
		}
	}
</script>

<style>
</style>
