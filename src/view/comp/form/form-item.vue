<template lang="">
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{
      label
    }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>
<script>
import Emitter from "../mixins/emitter";
import AsyncValidator from "async-validator";
export default {
  name: "iFormItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  inject: ["form"],
  mixins: [Emitter],
  data() {
    return {
      isRequired: false,
      validateState: "",
      validateMessage: ""
    };
  },
  computed: {
    fieldValue() {
      // 拿到当前组件的数据
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => rule && (!rule.trigger || rule.trigger.indexOf(trigger) !== -1)
      );
    },
    validate(trigger, callback) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        return true;
      }

      // 设置状态为校验中
      this.validateState = "validating";

      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";

        callback(this.validateMessage);
      });
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';
      this.form.model[this.prop] = this.initialValue
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      this.setRules();
      this.initialValue = this.fieldValue;
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  }
};
</script>
<style lang="">
.i-form-item-label-required:before {
  content: "*";
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>
