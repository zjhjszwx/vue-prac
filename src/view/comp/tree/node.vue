<template lang="">
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand"
          >+</span
        >
        <span v-if="data.children && data.children.length && data.expand"
          >-</span
        >
      </span>
      <span>{{ data.title }}</span>
      <tree-node
        v-if="data.expand"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></tree-node>
    </li>
  </ul>
</template>
<script>
import iCheckbox from "../form/checkbox";
import { findComponentUpward } from "../../../utils/assist";
export default {
  name: "TreeNode",
  components: {
    iCheckbox
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleExpand() {
      this.$set(this.data, 'expand', !this.data.expand);
      if(this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    }
  }
};
</script>
<style lang="">
.tree-ul,
.tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>
