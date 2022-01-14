<template lang="">
  <div>
    <Child :title="title" @updateInfo="updateInfo"></Child>
    index: {{ title }}
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      title: 111
    };
  },
  methods: {
    updateInfo() {
      console.log("update info");
    }
  }
};
</script>
<style lang=""></style>
