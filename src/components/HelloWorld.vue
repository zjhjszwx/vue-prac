<template lang="">
  <div>
    {{ message }}
  </div>
  <div v-once>{{ message }}</div>
  <div v-html="msgHtml"></div>
</template>
<script>
export default {
  data() {
    return {
      message: "欢迎来到Vue的世界",
      msgHtml: "<p style='color: red'>欢迎来到红色Vue的世界</p>",
    };
  },
  created() {
    this.message = "啦啦啦啦啦啦";
  },
  mounted() {
    this.message = "略略略略略";
  },
};
</script>
<style lang=""></style>
