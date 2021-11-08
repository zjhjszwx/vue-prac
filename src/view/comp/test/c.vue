<template lang="">
  <div>
    C component
    <comp-d v-for="(item, index) in data" :key="index" :data="item"></comp-d>
  </div>
</template>
<script>
import compD from "./d";

export default {
  name: "componentC",
  inject: ["form"],
  components: {
    compD
  },
  data() {
    return {
      name: "C component",
      data: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log("inject = ", this.form);
    this.$on("on-message", text => {
      console.log("c vue $on=", text);
    });
  }
};
</script>
<style lang=""></style>
