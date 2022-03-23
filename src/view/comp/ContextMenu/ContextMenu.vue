<template lang="">
  <div class="context-menu" v-show="show" :style="style" @mousedown.stop @contextmenu.prevent>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: {

      }
    }
  },
  props: {
    show: Boolean,
    offset: {
      type: Object,
      default: function() {
        return {
          left: 0,
          top: 0
        };
      }
    },

  },
  // computed: {
  //   style() {
  //     return {
  //       left: `${this.offset.left}px`,
  //       top: `${this.offset.top}px`
  //     }
  //   }
  // },
  watch: {
    show(show) {
      if(show) {
        this.$nextTick(this.setPosition)
      }
    }
  },
  mounted() {
    // 以body为父元素
    document.body.appendChild(this.$el)

    // 添加事件
    document.body.addEventListener('mousedown', this.clickDocumentHandler)
  },
  beforeDestroy() {
    let popperElm = this.$el
    if (popperElm && popperElm.parentNode === document.body) {
      document.body.removeChild(popperElm);
    }
    document.body.removeEventListener('mousedown', this.clickDocumentHandler)

  },
  methods: {
    clickDocumentHandler() {
      if(this.show) {
        this.$emit('update:show', false)
      }
    },
    setPosition() {
      let docHeight = document.documentElement.clientHeight
      let docWidth = document.documentElement.clientWidth
      let menuHeight = this.$el.getBoundingClientRect().height
      let menuWidth = this.$el.getBoundingClientRect().width

      console.log(docHeight, menuHeight)


    }
  }
}
</script>
<style lang="scss" scoped>
.context-menu {
  z-index: 1000;
  display: block;
  position: absolute;
}
</style>
