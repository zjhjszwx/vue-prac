<template lang="">
  <div>
    <div v-if="currentVisible" :class="maskClasses">
      <div class="content">
        <div class="close" @click="handleClose">X</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'drawer';
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      currentVisible: this.visible
    }
  },
  computed: {
    maskClasses() {
      return `${prefixCls}-mask`
    }
  },
  watch: {
    value(val) {
      this.currentVisible = val
    }
  },
  methods: {
    handleClose() {
      this.currentValue = false;
      this.$emit("input", false);
    }
  }
}
</script>
<style lang="scss">
  .drawer-mask {
    position: fixed;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);

    .content {
      width: 200px;
      background: #fff;
      height: 100%;
      position: absolute;
      right:0px;
      .close {
        text-align: right;
      }
    }
  }
</style>
