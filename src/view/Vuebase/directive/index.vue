<template lang="">
  <div>
    <el-button v-copy="copyText">copy</el-button>
    <el-button v-debounce="debounceClick">debounce</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyText: "123"
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
