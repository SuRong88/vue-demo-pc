<template>
	<div class="index">
		index
		<el-pagination @current-change="handleCurrentChange" class="pagination" background layout="prev, pager, next"
		 :page-size="limit" :current-page="current_page" :total="total_num"></el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'index',
		created() {
			let query = JSON.parse(JSON.stringify(this.$route.query))
			this.current_page = parseInt(query.page)
		},
		mounted() {},
		data() {
			return {
				current_page: 1,
				limit: 12,
				total_num: 99,
				total_page: 1,
			};
		},
		computed: {},
		watch: {
			'$route.query.page': function(newVal, oldVal) {
				// console.log(newVal)
				// console.log(oldVal)
			},
			'$route.query': function(newVal, oldVal) {
				console.log('oldVal'+oldVal.page)
				console.log('newVal'+newVal.page)
			}
		},
		methods: {
			handleCurrentChange(page) {
				let query = JSON.parse(JSON.stringify(this.$route.query))
				query.page = page
				this.$router.push({
					query: query
				});
			},
		}
	}
</script>

<style>
</style>
