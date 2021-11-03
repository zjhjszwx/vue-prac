<template lang="">
  <div>
    <i-form ref="form" :model="formVaildate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formVaildate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formVaildate.mail"></i-input>
      </i-form-item>
      <i-form-item label="是否是学生" prop="isStudent">
        <i-checkbox v-model="formVaildate.isStudent"></i-checkbox>
      </i-form-item>
      <i-form-item label="选项" prop="multiple">
        <i-checkbox-group v-model="formVaildate.multiple">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
  </div>
</template>
<script>
import iForm from "./form";
import iFormItem from "./form-item";
import iInput from "./input";
import iCheckbox from "./checkbox";
import iCheckboxGroup from "./checkboxGroup";
export default {
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox,
    iCheckboxGroup
  },
  data() {
    return {
      formVaildate: {
        name: "xxx",
        mail: "",
        isStudent: true,
        multiple: ["option1", "option3"]
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
      }
    };
  },
  methods: {
    handleSubmit() {
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
<style lang=""></style>
