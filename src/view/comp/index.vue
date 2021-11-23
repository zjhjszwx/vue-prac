<template lang="">
  <div>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/product/list">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <button @click="visible = !visible">drawer btn</button>
      <Drawer v-model="visible">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
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
import Breadcrumb from './breadcrumb/index'
const BreadcrumbItem = Breadcrumb.Item;
import Drawer from './drawer/drawer'

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
    InputNumber,
    Breadcrumb,
    BreadcrumbItem,
    Drawer
  },
  data() {
    return {
      visible: false
    }
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
