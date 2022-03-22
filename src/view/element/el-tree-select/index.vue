<template>
  <div id="app" style="padding: 20px">
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
          v-model="form.valueId"
          height="200"
        ></SelectTree>
      </el-form-item>
      <el-form-item label="数字" prop="number">
        <IInput v-model="form.number" @input="validateField('number')"></IInput>
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
import IInput from './input.vue'
export default {
  name: "app",
  components: {
    SelectTree,
    IInput
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
        ],
        number: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ]
      },
      form: {
        valueId: 1,
        number: ''
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
    // 1. form校验, 自定义组件需要传入校验
    validateField(e) {
      this.$refs.form.validateField(e)
    },
    // 取值
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.form)
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
