const userInfo = {
  state: {
    info: {},
  },
  mutations: {
    USER_INFO(state, data) {
      state.info = data
    }
  },

  actions:{
    getUserInfo({commit}, data){
      commit('USER_INFO', data)
    }
  }
}

export default userInfo