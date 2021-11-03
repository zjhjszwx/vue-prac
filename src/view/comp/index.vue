<template lang="">
  <div>
    <comp-a></comp-a>
    <my-form></my-form>
  </div>
</template>
<script>
import myForm from "./form/index";
import myButton from "./button/index";
import compA from "./findComp/compA";
export default {
  components: {
    myForm,
    myButton,
    compA
  },
  methods: {}
};
</script>
<style lang=""></style>
