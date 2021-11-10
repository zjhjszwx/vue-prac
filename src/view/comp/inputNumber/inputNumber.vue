<template lang="">
  <div>
    <button @click="increase(-1)">-1</button>
    <span>{{ currentValue }}</span>
    <button @click="increase(+1)">+1</button>
  </div>
</template>
<script>
// v-model 是一个语法糖, 可以才分为 props:value 和 event:input, 组件必须提供一个名为value的prop,以及名称为input的自定义的事件,满足这两个条件,就可以在组件上使用 v-model
export default {
  name: "inputNumber",
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    increase(val) {
      this.currentValue += val;
      this.$emit("input", this.currentValue);
    }
  }
};
</script>
<style lang=""></style>
