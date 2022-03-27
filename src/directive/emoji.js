const findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

// 禁止输入特殊字符
const emoji = {
  bind: function (el, binding, vnode) {
    const reg = /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
    let $inp = findEle(el, 'input')
    el.$inp = $inp
    el.handler = function () {
      let val = $inp.value
      $inp.value = val.replace(reg, '')
      // input event is emitted when <input> <select> <textarea> is changed
      // trigger($inp, 'input')
    }
    $inp.addEventListener('keyup', el.handler)
  },
  unbind: function (el) {
    el.$inp.removeEventListener('keyup', el.handler)
  }
}

export default emoji
