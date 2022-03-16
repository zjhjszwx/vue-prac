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
            <el-button type="primary" @click="getAccessTokenByCode">登录</el-button>
            <el-button type="primary" @click="onSubmit">授权</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import axios from 'axios'

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
      window.location.href =
      "https://github.com/login/oauth/authorize?client_id=cc750df238c4c37eb8f1&redirect_uri=http://localhost:8080/project";
    },
    getUserInfoByAccessToken(access_token) {
      axios({
        method: "GET",
        url: "/githubUserInfo",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json",
          Authorization: `token ${access_token}`
        }
      }).then(res => {
        console.log(res.data);
        /**
         * 这里调用自己的用户接口 存储数据---跳转首页
         */
      });
    },
    async getAccessTokenByCode() {
      const client_id = "cc750df238c4c37eb8f1";
      const client_secret = "ea3aa152cc08ed8edd1f80aa2c1b339c4fb45e48";
      const code = this.$route.query.code;
      const tokenResponse = await axios({
        method: "get",
        url: "/githubAccessToken",
        params: {
          client_id,
          client_secret,
          code
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json"
        }
      });
      const data = tokenResponse.data
      const list = data.split('=') || []
      const token = list[1]
      this.getUserInfoByAccessToken(token)
    }
  }
};
</script>
<style lang=""></style>
