<template lang="">
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
<script>
import Emitter from "../mixins/emitter";
export default {
  name: "iInput",
  mixins: [Emitter],
  props: {
    type: String,
    default: ""
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
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      this.setRules();
    }
  }
};
</script>
<style lang=""></style>
