<template>
  <avue-form v-model="form" :option="option">
    <!-- <template slot-scope="scope" slot="text">
      <div>
        <el-tag>{{form.text?form.text:'暂时没有内容'}}</el-tag>
        <el-input v-model="form.text" placeholder="这里是自定的表单"></el-input>
      </div>
    </template> -->
  </avue-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        text: ''
      },
      option: {
        defail: true,
        labelWidth: 120,
        column: [{
          label: '姓名',
          prop: 'text',
          // formslot: true,
          rules: [{
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }]
        }]
      }
    };
  },
  mounted() {
    this.form = {
      text: 'smallwei',
    }
  }
}
</script>
<style>
.formClassName {
  padding: 0 0 0 55px !important;
  background-color: #409eff;
  color: #fff;
}
</style>
