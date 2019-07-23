<template>
	<div class="main">
		<div>
			<h1 class="head">todos</h1>
		</div>
		<div class="content">
			<div class="content-head">
				<el-checkbox :value="allComplete" @change="selectAll"></el-checkbox>
				<el-input v-model="inputValue" placeholder="请输入内容" @keydown.enter.native="addItem"></el-input>
			</div>
			<div class="list">
				<span v-for="(item, index) of list" :key="index">
					<el-checkbox v-model='item.complete'>{{item.value}}</el-checkbox>
					<el-divider></el-divider>
				</span>
			</div>
			<div class="content-foot">
				<span>{{num}} 项待办</span>
				<div>
					<el-button size="small">全部</el-button>
					<el-button size="small">待办</el-button>
					<el-button size="small">已完成</el-button>
				</div>
				<el-button size="small" @click="deleteComplete">删除已完成</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Divider, Checkbox, Input, Button  } from 'element-ui'
	import { mapState, mapActions, mapGetters } from 'vuex'
	export default {
		name: 'Todos',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				inputValue: '',
				allComplete: false,
			}
		},
		computed:{
			...mapState(['list']),
			...mapGetters(['num'])
			
		},
		methods:{
			addItem() {
				if(this.inputValue) {
					var item = {
						value: this.inputValue,
						complete: false
					}
					this.$store.dispatch('addItem', item)
				}
				this.inputValue = ''
			},
			
			selectAll() {
				this.$store.dispatch('selectAll', !this.allComplete)
				this.allComplete = !this.allComplete
			},
			
			deleteComplete() {
				this.$store.dispatch('deleteComplete')
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.head {
		font-size: 100px;
		color: rgba(175, 47, 47, .15);
	}
	.content {
		width: 500px;
		margin: 0 auto;
		border: 1px solid #000000;
		border-radius: 10px;
	}
	.content .content-head {
		width: 460px;
		padding: 20px;
		height: 40px;
		border-bottom: 2px solid #E4E4E4;
		display: flex;
		align-items: center;
		margin-bottom: 25px;
	}
	.content .list {
		padding-left: 20px;
		text-align: left;
	}
	.content .content-foot {
		display: flex;
		justify-content:space-around;
		padding-bottom: 20px;
	}
</style>
