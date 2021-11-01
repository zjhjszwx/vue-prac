<template lang="">
  <button
    :class="'i-button-size-' + size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script>
function oneOf(value, validList) {
  if (validList.indexOf(value) > -1) {
    return true;
  }
  return false;
}

export default {
  name: "iButton",
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    default: "default"
  },
  methods: {
    handleClick(event) {
      // this.$emit("test", 'callback--'); // 在当前组件触发自定义事件, 并返回一些参数给父级
    }
  },
  created() {
    this.$on("on-message", text => {
      console.log(text);
    });
  }
};
</script>
<style lang="" scoped>
.i-button-size-large {
  font-size: 16px;
}
.i-button-size-small {
  font-size: 12px;
}
.i-button-size-default {
  font-size: 14px;
}
</style>
