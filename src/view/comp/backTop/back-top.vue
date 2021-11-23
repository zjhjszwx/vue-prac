<template lang="">
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'back-top';
export default {

  computed: {
    classes() {
      return [`${prefixCls}`]
    }
  }
}
</script>
<style lang="">

</style>
