<template>
  <InputNumber v-model="value" />
  <!--  <InputNumber :number="value" @input="handleChange"  /> -->

</template>
<script>
  import InputNumber from './inputNumber';

  export default {
    components: { InputNumber },
    data () {
      return {
        value: 1
      }
    },
    methods: {
      handleChange (val) {
        this.value = val;
        console.log(val);
      }
    }
  }
</script>
