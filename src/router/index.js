import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../cnode/PostList.vue'
import UserInfo from '../cnode/UserInfo.vue'
import Chart from '../view/echart/index'



Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        default: PostList,
        main: PostList
      }
    }, 
    {
      path: '/user/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/chart',
      name: 'chart',
      components: {
        main: Chart
      }
    }
  ]
})
