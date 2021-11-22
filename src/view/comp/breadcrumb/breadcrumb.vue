<!-- 参考iview https://github.com/iview/iview/blob/2.0/src/components/breadcrumb/breadcrumb-item.vue -->
<template lang="">
  <div class="breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  .breadcrumb {

    & > span:last-child &-item-separator {
      display: none
    }
  }
</style>
