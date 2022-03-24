const debounce = {
  inserted: function (el, binding) {
    let timer = null
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      // 设置一个倒计时，如果倒计时存在就不执行func
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, 1000)
      if (callNow) {
        binding.value()
      }
    })

  }
}

export default debounce
