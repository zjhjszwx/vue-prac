<template lang="">
  <div>
    <test-comp></test-comp>
  </div>
</template>
<script>
import myForm from "./form/index";
import myButton from "./button/index";
import compA from "./findComp/compA";
import recursionComp from "./tree/recursion";
import dynamicComp from "./tree/dynamicComp/index";
import TreeComp from './tree/index'
import testComp from './test/a'

export default {
  components: {
    myForm,
    myButton,
    compA,
    recursionComp,
    dynamicComp,
    TreeComp,
    testComp
  },
  methods: {
    handleAlert() {
      this.$Alert.info({
        content: "我是提示框"
      });
    }
  }
};
</script>
<style lang=""></style>
