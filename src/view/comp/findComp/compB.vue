<template lang="">
  <div>
    组件b
  </div>
</template>
<script>
import { findComponentUpward } from '../../../utils/assist'
export default {
  name: "componentB",
  data() {
    return {
      name: "组件 B"
    };
  },
  methods: {
    sayHello() {
      console.log("Hello, componentB");
    }
  },
  mounted() {
    const compA = findComponentUpward(this, 'componentA')
    if(compA) {
      compA.sayHello()
    }
  },
};
</script>
<style lang=""></style>
