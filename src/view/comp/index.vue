<template lang="">
  <div>
    <ContextMenu></ContextMenu>
  </div>
</template>
<script>
import myForm from "./form/index";
import myButton from "./button/index";
import compA from "./findComp/compA";
import recursionComp from "./tree/recursion";
import dynamicComp from "./tree/dynamicComp/index";
import TreeComp from "./tree/index";
import testComp from "./test/a";
import tableComp from "./table/index";
import testNexttick from "./test/nextTick";
import InputNumber from "./inputNumber/index";
import Breadcrumb from "./breadcrumb/index";
const BreadcrumbItem = Breadcrumb.Item;
import Drawer from "./drawer/drawer";
import Avatar from "./avatar";
import Hoc from "../../components/hoc/test";
import ContextMenu from './ContextMenu'

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
    Drawer,
    Avatar,
    Hoc,
    ContextMenu
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleAlert() {
      this.$Alert.info({
        content: "我是提示框",
      });
    },
  },
};
</script>
<style lang=""></style>
