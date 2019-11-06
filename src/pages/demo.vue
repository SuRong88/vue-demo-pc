<template>
	<div class="demo">
		<h1>常用elemenui组件</h1>
		<h2>分页器</h2>
		<el-pagination @current-change="handleCurrentChange" class="pagination" background layout="prev, pager, next,jumper"
		 :page-size="limit" :current-page="current_page" :total="total_num"></el-pagination>
		<h2>下拉框</h2>
		<el-select popper-class='select' no-data-text='empty' filterable clearable v-model="select" placeholder="文字" @change=''>
			<el-option v-for="(item, index) in arr" :key="item" :label="item" :value="item"></el-option>
		</el-select>
		<h2>单选框</h2>
		<el-radio-group v-model="radio">
			<el-radio-button v-for="(item, index) in arr" :label="index">{{ item }}</el-radio-button>
		</el-radio-group>
		<h2>复选框</h2>
		<el-checkbox-group v-model="checkbox" :min="0" :max="3">
			<el-checkbox v-for="(tag, index) in arr" :label="index" :key="tag">{{ tag }}</el-checkbox>
		</el-checkbox-group>
		<h2>弹性布局</h2>
		<p>
			引用断点样式的时候使用
			import 'element-ui/lib/theme-chalk/display.css';
			hidden-xs-only - 当视口在 xs 尺寸时隐藏
			hidden-sm-only - 当视口在 sm 尺寸时隐藏
		</p>
		<el-row type="flex" class="row-bg">
		  <el-col :span="6"><div class="grid-content bg-purple"></div>
		  6</el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light">6</div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div>6</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="space-around">
		  <el-col   :lg="{span:8}" :xs="{span:12}"><div class="grid-content bg-purple">12</div></el-col>
		  <el-col  :xs="{span:12}" :lg="{span:8}"><div class="grid-content bg-purple-light">12</div></el-col>
		  <el-col :xs="{span:12}" :lg="{span:8}"><div class="grid-content bg-purple">12</div></el-col>
		</el-row>
		 <el-row>
		        <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4">1</el-col>
		        <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="18">
					2
		        </el-col>
		        <el-col :xs="0" :sm="1" :md="2" :lg="3" :xl="4">3</el-col>
		    </el-row>
	</div>
</template>

<script>
	export default {
		name: 'demo',
		created() {
			let query = JSON.parse(JSON.stringify(this.$route.query))
			this.current_page = parseInt(query.page)
		},
		mounted() {},
		data() {
			return {
				// 分页器
				current_page: 1,
				limit: 12,
				total_num: 99,
				total_page: 1,
				// 下拉菜单
				select: '',
				arr: ['选项1', '选项2', '选项3', '选项4'],
				// 单选
				radio:'',
				// 复选
				checkbox:[]

			};
		},
		computed: {},
		watch: {
			'$route.query.page': function(newVal, oldVal) {
				// console.log(newVal)
				// console.log(oldVal)
			},
			'$route.query': function(newVal, oldVal) {
				console.log('oldVal' + oldVal.page)
				console.log('newVal' + newVal.page)
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
	.select {
		width: 50px;
	}
	 .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
</style>
