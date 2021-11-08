<template lang="">
  <div>
    A component
    <b-component
      ref="compB"
      title="A component title"
      @test="handleClick"
    ></b-component>
    <button @click="handleBroadcast">触发事件</button>
  </div>
</template>
<script>
import bComponent from "./b";
import Emitter from "../mixins/emitter";

export default {
  name: 'componentA',
  mixins: [Emitter],
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
    },
    handleBroadcast() {
      this.broadcast('componentB', 'on-message', 'hello vue js')
      this.broadcast('componentC', 'on-message', 'hello vue js')

    }
  },
  mounted() {
    console.log(this.$refs.compB.name);
  },
  created() {}
};
</script>
<style lang=""></style>
