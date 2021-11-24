<template lang="">
  <span class="avatar">
    <img :src="src" v-if="src" />
    <slot></slot>
  </span>
</template>
<script>
const prefixCls = 'avatar'
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
  .avatar {
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 100px;
    height: 100px;
    line-height: 100px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
</style>
