<template lang="">
  <div>
    C component
  </div>
</template>
<script>
export default {
  inject: ['form'],
  data() {
    return {
      name: 'C component'
    }
  },
  mounted() {
    console.log('inject = ',this.form);
    
  },
}
</script>
<style lang="">
  
</style>