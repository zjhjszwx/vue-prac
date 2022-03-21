<template lang="">
  <div>
    自定义 <el-input v-model="newValue" @change="handleChange"></el-input>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newValue: ''
    }
  },
  watch: {
    value(v){
      this.newValue = v
    }
  },
  methods: {
    handleChange(){
      this.$emit('input', this.newValue)
    }
  }
}
</script>
<style lang="">

</style>
