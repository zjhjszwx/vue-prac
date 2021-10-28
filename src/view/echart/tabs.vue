<!--应急处置-->
<template lang="">
  <div class="emergencyTreatmentPage">
    <el-tabs v-model="activeName">
      <el-tab-pane label="本年度应急处置事件统计" name="first">
        本年度应急处置事件统计
      </el-tab-pane>
      <el-tab-pane label="本年度应急事件处理状态统计" name="second"
      >本年度应急事件处理状态统计</el-tab-pane
      >
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>
<style>
.emergencyTreatmentPage {
  font-size: 8px;
  // color: red;
  
}
</style>
