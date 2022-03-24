<template lang="">
    <transition name="context-menu">
      <div class="context-menu" v-show="show" :style="style" @mousedown.stop @contextmenu.prevent>
            <slot></slot>
      </div>
    </transition>
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
    // 一般情况parentNode可以取代parentElement的所有功能
    // this.$el.parentNode.appendChild(this.$el)
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
      let y = 0;
      let x = 0;
      if ((this.offset.top + menuHeight) > docHeight) {
        y = menuHeight
      }
      if ((this.offset.left + menuWidth) > docWidth) {
        y = menuWidth
      }
      // console.log(docHeight)

      this.style = {
        left: `${this.offset.left - x}px`,
        top: `${this.offset.top - y}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.context-menu {
  z-index: 1000;
  display: block;
  position: fixed;
  // position: absolute;
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }

}
</style>
