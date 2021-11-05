<template lang="">
  <div>
    A component
    <b-component
      ref="compB"
      title="A component title"
      @test="handleClick"
    ></b-component>
  </div>
</template>
<script>
import bComponent from "./b";
export default {
  provide: {
    form: "A component"
  },
  data() {
    return {
      name: "A component"
    };
  },
  components: {
    bComponent
  },
  methods: {
    handleClick(e) {
      console.log("$emit", e);
    }
  },
  mounted() {
    console.log(this.$refs.compB.name);
   
  },
  created() {}
};
</script>
<style lang=""></style>
