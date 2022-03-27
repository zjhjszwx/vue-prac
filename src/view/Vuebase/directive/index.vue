<template lang="">
  <div>
    <el-button v-copy="copyText">copy</el-button>
    <el-button v-debounce="debounceClick">debounce</el-button>
    <el-input v-emoji v-model="note"></el-input>
    <!-- 显示 -->
    <button v-permission="1">权限按钮1</button>
    <!-- 不显示 -->
    <button v-permission="10">权限按钮2</button>
    <div style="height: 800px"></div>
    <img
      v-LazyLoad="
        'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
      "
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyText: "123",
      note: "note"
    };
  },

  methods: {
    debounceClick() {
      console.log("debounce===");
    }
  }
};
</script>
<style lang=""></style>
