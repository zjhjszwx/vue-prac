<template lang="">
  <div>
    child2
    {{ title }}
    <button @click="click">btn</button>
  </div>
</template>
<script>
export default {
  // inheritAttrs: false, //如果希望不继承父组件的属性，则为false
  props: {
    title: Number
  },
  methods: {
    click() {
      console.log(this.$listeners); //包含了父作用域中的事件
      console.log(this.$attrs); // 包含了父作用域中除了props的属性
      this.$emit("updateInfo");
    }
  }
};
</script>
<style lang=""></style>
