import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../cnode/PostList.vue'
import UserInfo from '../cnode/UserInfo.vue'
import Chart from '../view/echart/index'
import Comp from '../view/comp/index'
import Vuebase from '../view/Vuebase/index'
import Element from '../view/element/index'
import Avue from '../view/Avue/index'
import Project from '../view/project/index'
import Home from '../view/project/home/home.vue'
import Product from '../view/project/home/product/product'
import ProductList from '../view/project/home/product/productList'

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
    },
    {
      path: '/comp',
      name: 'comp',
      components: {
        main: Comp
      }
    },
    {
      path: '/vue',
      name: 'vue',
      components: {
        main: Vuebase
      }
    },
    {
      path: '/ele',
      name: 'ele',
      components: {
        main: Element
      }
    },
    {
      path: '/avue',
      name: 'avue',
      components: {
        main: Avue
      }
    },
    {
      path: '/project',
      name: 'project',
      components: {
        main: Project
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        main: Home
      },
    },
    {
      path: '/product',
      components: {
        main: Product
      },
      name: 'product',
      children: [ // 子路由内容
        // 产品列表
        { path: "list", component: ProductList, name: "ProductList" },
        // 产品新增
        // { path: "add/0", component: ProductEdit, name: "ProductAdd" },
        // 产品编辑
        // 我们能看到，新增和编辑其实最终使用的是同一个组件
        // 当 edit/:id 匹配成功，
        // ProductEdit 会被渲染在 Product 的 <router-view> 中
        // { path: "edit/:id", component: ProductEdit, name: "ProductEdit" }
      ]
    }
  ]
})
