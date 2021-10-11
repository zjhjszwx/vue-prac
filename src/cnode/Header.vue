<template lang="">
 <div class="Header">
  	<router-link :to="{name:'root'}">
  		<img src="../assets/cnodejs_light.svg"/>
  	</router-link>
		{{count}}
		/ 
		{{double}}
		<span @click="increment">+</span>
  	<span><a href="#">关于</a></span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
	computed: {
		count(){
			return this.$store.getters.getCount
		},
		...mapGetters(['double'])  
		// 把getters引入 相当于
		// double () {
    // 	return this.$store.getters.double
  	// }
	},
	methods: {
		increment() {
			this.$store.commit('increment', 2);
			// this.$store.dispatch('increment', 2)
			// console.log(this.$store.getters.getCount)
		}
	}
}
</script>
<style lang="">
  .Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>