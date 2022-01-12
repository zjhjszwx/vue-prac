<template lang="">
  <div>
    child
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
  </div>
</template>
<script>
import Child2 from "./child2.vue";
export default {
  components: {
    Child2
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  }
};
</script>
<style lang=""></style>
