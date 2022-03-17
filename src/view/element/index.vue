<template lang="">
  <div>
    index
    <TreeSelect></TreeSelect>
  </div>
</template>
<script>
import DataTransfer from "./dataTransfer/index.vue";
import CustomForm from "./customForm/page.vue";
import TreeSelect from "./el-tree-select"
export default {
  components: {
    DataTransfer,
    CustomForm,
    TreeSelect
  },
  data() {
    return {};
  }
};
</script>
<style lang=""></style>
