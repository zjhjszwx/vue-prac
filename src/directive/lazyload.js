const lazyload = {
  install(Vue, options) {
    // default img
    const defaultSrc = options.default
    Vue.directive('LazyLoad', {
      bind(el, binding) {
        lazyload.init(el, binding.value, defaultSrc)
      },
      inserted(el) {
        if (IntersectionObserver) {
          lazyload.observe(el)
        }
      }
    })
  },
  init(el, val, def) {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
  },
  observe(el) {
    let io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let src = el.dataset.src
        if (src) {
          // 演示效果
          setTimeout(() => {
            el.src = src
            el.removeAttribute('data-src')
          }, 1000)
        }
      }
    })
    io.observe(el)
  }
}

export default lazyload
