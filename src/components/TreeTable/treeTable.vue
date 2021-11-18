<template lang="">
  <!-- $attrs 包含了父作用域中不作为prop被识别的属性 -->
  <el-table :data="data" v-bind="$attrs" size="small"> 
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      :prop="column.value"
      :label="column.text"
    >
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang=""></style>
