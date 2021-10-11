const counter = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state, num) {
      state.count = state.count + num
    }
  },
  getters: {
    double: state => {
      return state.count * 2
    }
  },
  actions:{
    increment({commit}, num){
      commit('increment', num)
    }
  }
}

export default counter