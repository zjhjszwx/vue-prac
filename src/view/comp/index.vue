<template lang="">
  <div>
    <tree-comp></tree-comp>
    <test-nexttick></test-nexttick>
    <input-number></input-number>
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
import tableComp from './table/index'
import testNexttick from './test/nextTick'
import InputNumber from './inputNumber/index'

export default {
  components: {
    myForm,
    myButton,
    compA,
    recursionComp,
    dynamicComp,
    TreeComp,
    testComp,
    tableComp,
    testNexttick,
    InputNumber
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
