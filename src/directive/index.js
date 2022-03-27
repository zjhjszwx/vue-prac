import copy from './copy'
import debounce from './debounce'
import emoji from './emoji'
import permission from './permission'
const directives = {
  copy,
  debounce,
  emoji,
  permission
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
