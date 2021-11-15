<template lang="">
  <el-row :gutter="20" style="margin-top: 100px">
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="top"
          :rules="formRules"
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      formRules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "change"
          },
          {
            min: 2,
            max: 10,
            message: "长度在2到10之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change"
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({
        name: 'product'
      })
    }
  }
};
</script>
<style lang=""></style>
