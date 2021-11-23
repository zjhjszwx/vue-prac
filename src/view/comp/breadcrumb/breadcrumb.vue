<!-- 参考iview https://github.com/iview/iview/blob/2.0/src/components/breadcrumb/breadcrumb-item.vue -->
<template lang="">
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'breadcrumb';
export default {
  name: 'Breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  computed: {
    classes() {
      return `${prefixCls}`
    }
  },
  updated() {
    this.$nextTick(() => {
      this.updateChildren()
    })
  },
  methods: {
    updateChildren() {
      this.$children.forEach(child => {
        child.separator = this.separator
      })
    }
  },
  mounted() {
    this.updateChildren()
  },
  watch: {
    separator: function() {
      this.updateChildren()
    }
  }
}
</script>
<style lang="scss">
  .breadcrumb {

    & > span:last-child &-item-separator {
      display: none
    }
  }
</style>
