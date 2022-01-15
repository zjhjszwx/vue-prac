<template lang="">
  <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    @close="handleClose"
    :destroy-on-close="true"
    size="50%"
  >
    <div>
      <el-form ref="iform" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="活动名称" prop="name.x">
          <el-input v-model="form.name.x"></el-input>
        </el-form-item>
        <!-- <el-form-item label="活动区域" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="coustom" prop="desc">
          <Iswitch
            v-model="form.desc"
            :person="'value1'"
            :company="'value2'"
          ></Iswitch>
        </el-form-item>
        <DyncForm :fieldArray="fieldArray" :fieldObj="form"></DyncForm>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>
</template>
<script>
import Iswitch from "./iswitch.vue";
import formData from "./form.js";
import DyncForm from "./dyncForm.vue";
export default {
  components: {
    Iswitch,
    DyncForm
  },
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      drawer: false,
      rules: {
        "name.x": [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur"
          }
        ],
        姓名: [
          {
            required: true,
            message: "请输入",
            trigger: "blur"
          }
        ]
      },
      fieldArray: [] // 表单字段集合
    };
  },
  methods: {
    onSubmit() {
      this.$refs.iform.validate(vaild => {
        console.log(this.form);
      });
    },
    handleClose() {
      this.$refs.iform.resetFields();
      this.drawer = false;
      console.log("handleClose");
    },
    getFieldData() {
      // 获取动态表单数据
      this.fieldArray = formData.data;
      for (let i = 0; i < formData.length; i++) {
        let item = formData[i];
        if (item.htmlElements === "复选框") {
          this.$set(this.form, item.showName, []);
        } else {
          this.$set(this.form, item.showName, item.showValue);
        }
      }
    }
  },

  created() {},
  mounted() {
    console.log("mounted");
    this.getFieldData();
    setTimeout(() => {
      console.log(this.fieldArray, this.fieldObj);
    }, 500);
  }
};
</script>
<style lang=""></style>
