<!-- component-a.vue -->
<template>
  <div>
    组件 A
    <component-b></component-b>
  </div>
</template>
<script>
import componentB from "./compB.vue";
import { findComponentDownWard,findComponentsDownward } from '../../../utils/assist'

export default {
  name: "componentA",
  components: { componentB },
  data() {
    return {
      name: "Aresn"
    };
  },
  methods: {
    sayHello() {
      console.log("Hello,componentA");
    }
  },
  mounted() {
    const compB = findComponentsDownward(this, 'componentB');
  },
};
</script>
