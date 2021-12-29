<template lang="">
  <div>
    <el-row :span="24">
      <el-col :span="6">
        值:{{form}}<br/>
        <avue-input v-model="form" placeholder="请输入内容" ></avue-input>
      </el-col>
    </el-row>
    <a-table></a-table>
  </div>
</template>
<script>
import AForm from './form'
import ATable from './table.vue'
export default {
  components: {
    AForm,
    ATable
  },
  data() {
    return {
      form: "11"
    }
  }
};
</script>
<style lang="">
</style>
