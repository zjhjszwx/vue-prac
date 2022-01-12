<template lang="">
  <el-drawer
    title="我是标题"
    :visible.sync="drawer"
    @close="handleClose"
    :destroy-on-close="true"
  >
    <div>
      <el-form ref="iform" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="活动名称" prop="x">
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
export default {
  components: {
    Iswitch
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
        x: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur"
          }
        ]
      }
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
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  }
};
</script>
<style lang=""></style>
