<template lang="">
  <div>
    child
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
    child: {{ title }}
    <button @click="handleClick">change title</button>
  </div>
</template>
<script>
import Child2 from "./child2.vue";
export default {
  components: {
    Child2
  },
  props: {
    title: Number
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.title = 222;
    }
  },
  mounted() {
    console.log(this.title);
  }
};
</script>
<style lang=""></style>
