<template lang="">
  <div>
    {{ data.title }}
    <my-component
      v-if="data.expand"
      v-for="(item, index) in data.children"
      :key="index"
      :data="item"
    ></my-component>
  </div>
</template>
<script>
export default {
  name: "my-component",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      name: "D component"
    };
  }
};
</script>
<style lang=""></style>
