const lazyload = {
  install(Vue, options) {
    // default img
    const defaultSrc = options.default
    Vue.directive('LazyLoad', {
      bind(el, binding) {
        lazyload.init(el, binding.value, defaultSrc)
      },
      inserted(el) {
        if (!IntersectionObserver) {
          lazyload.observe(el)
        } else {
          lazyload.listenerScroll(el)
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
        lazyload.changeSrc(el)
      }
    })
    io.observe(el)
  },
  listenerScroll(el){
    const handler = lazyload.throttle(lazyload.load, 3000)
    window.addEventListener('scroll', () => {
      // lazyload.load(el)
      handler(el)
    })
  },
  load(el) {
    let docHeight = document.documentElement.clientHeight
    let eTop = el.getBoundingClientRect().top
    let eBottom = el.getBoundingClientRect().bottom
    console.log(el.getBoundingClientRect())
    if(eTop - docHeight < 0 && eBottom > 0) {
      lazyload.changeSrc(el)
    }
  },
  changeSrc(el) {
    let src = el.dataset.src
    if (src) {
      // 演示效果
      setTimeout(() => {
        el.src = src
        el.removeAttribute('data-src')
      }, 1000)
    }
  },
  throttle(fn, delay) {
    let timer
    let prevTime
    return function (...args) {
      const currTime = Date.now()
      const context = this
      if (!prevTime) prevTime = currTime
      clearTimeout(timer)

      if (currTime - prevTime > delay) {
        prevTime = currTime
        fn.apply(context, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(function () {
        prevTime = Date.now()
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  },
}

export default lazyload
