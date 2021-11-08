<template lang="">
  <div>
    B component
    <comp-c></comp-c>
    <button @click="handleEmitEvent">click</button>
  </div>
</template>
<script>
import compC from "./c";
import Emitter from "../mixins/emitter";

export default {
  name: "componentB",
  mixins: [Emitter],
  data() {
    return {
      name: "B component"
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    compC,
  },
  methods: {
    handleEmitEvent() {
      this.$emit("test", "component B callback");
    }
  },
  mounted() {
    console.log("this.$parent.name=", this.$parent.name);
    console.log("this.$children[0].name=", this.$children[0].name);
    console.log(this.title);
    this.$on("test", text => {
      console.log("$on=", text);
    });

    this.$on("on-message", text => {
      console.log("b vue $on=", text);
    });
  }
};
</script>
<style lang=""></style>
