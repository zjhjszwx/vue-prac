// https://juejin.cn/post/6983246004158103588#comment
const wrapperPromise = (component, promiseFn) => {
  return {
    name: 'promise-component',
    data() {
      return {
        loading: false,
        result: {},
        error: false
      }
    },
    methods: {
      async request() {
        this.loading = true
        // 获取view的参数
        const params = this.$refs.wrapper.requestParams
        const result = await promiseFn(params).finally(() => {
          this.loading = false
        })
        this.result = result
      }
    },
    async mounted() {
      this.$refs.wrapper.$watch('requestParams', this.request, {
        immediate: true
      })
    },
    render(h) {
      const conf = {
        props: {
          // 混入
          ...this.$attrs,
          result: this.result,
          loading: this.loading,
        },
        // 传递事件
        on: this.$listeners,
        // 传递 $scopedSlots
        scopedSlots: this.$scopedSlots,
        ref: 'wrapper'
      }
      const wrapper = h('div', [h(component, conf), this.loading ? h('div', 'loading') : null, this.error ? h('div', 'error') : null]);
      return wrapper
    }
  }
}

export {
  wrapperPromise
}
