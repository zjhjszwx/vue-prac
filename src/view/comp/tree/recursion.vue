<template lang="">
  <div>
    <my-component :count="count + 1" v-if="count < 5"></my-component>
  </div>
</template>
<script>
export default {
  name: 'my-component',
  props: {
    count: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="">
  
</style>