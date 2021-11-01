<template lang="">
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
export default {
  name: "iFormItem",
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  }
};
</script>
<style lang=""></style>
