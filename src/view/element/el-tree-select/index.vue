<template>
  <div id="app">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      label-position="top"
      :rules="formRules"
    >
      <el-form-item label="账号" prop="name">
        <SelectTree
          :options="list"
          :value="form.valueId"
          @getValue="($event) => this.form.valueId = $event"
          height="200"
        ></SelectTree>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>


    ID为：{{form.valueId}}
  </div>
</template>

<script>
import SelectTree from "./treeSelect.vue";
export default {
  name: "app",
  components: {
    SelectTree
  },
  data() {
    return {
      formRules: {
        name: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ]
      },
      form: {
        valueId: 1
      },
      // valueId: 1, // 初始ID（可选）
      // 选项列表（必选）
      list: [
        {
          id: 1,
          name: "一级菜单A",
          children: [{
            id: 2,
            name: "一级菜单A-1",
            children: [{
              id: 3,
              name: "一级菜单A-1-1",
            }]
          }]
        },
        {
          id: 4,
          name: "一级菜单B",
        }
      ],
    };
  },
  computed: {

  },
  methods: {
    // 取值
    getValue(value) {
      this.valueId = value;
      console.log(this.valueId);
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    }
  }
};
</script>

<style lang="">

</style>
