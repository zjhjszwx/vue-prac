import router from './router/index';
import store from './store';
import axios from 'axios'

router.beforeEach((to, from ,next) => {
  if(to.name === 'user_info'){
    axios({
      url: `https://cnodejs.org/api/v1/user/${to.params.name}`,   //ES6语法，引入组件内的 route object（路由信息对象） 
      method: 'get',
    }).then(res => {
      if(res.status == 200) {
        store.dispatch('getUserInfo', res.data.data).then(() => {
          next()
        })
      }
    })

    return
  }
  next()
})