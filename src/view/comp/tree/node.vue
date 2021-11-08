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
      <input
        v-if="showCheckbox"
        type="checkbox"
        :checked="data.checked"
        @change="handleCheck"
      />
      <tree-node
        v-if="data.expand"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :showCheckbox="showCheckbox"
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
  data() {
    return {
      tree: findComponentUpward(this, "tree")
    };
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
      // 如果 this.data.expand = !this.data.expand; 则视图不会更新. 这里的data是父级的数据
      this.$set(this.data, "expand", !this.data.expand);
      if (this.tree) {
        this.tree.emitEvent("on-toggle-expand", this.data);
      }
    },
    handleCheck(e) {
      const checked = e.target.checked;
      this.updateTreeDown(this.data, checked);
      if (this.tree) {
        this.tree.emitEvent("on-check-change", this.data);
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, "checked", checked);
      if (data.children && data.children.length > 0) {
        data.children.forEach(child => {
          this.updateTreeDown(child, checked);
        });
      }
    }
  },
  watch: {
    'data.children': {
      handler (data) {
        if (data) {
          const checkedAll = !data.some(item => !item.checked);
          this.$set(this.data, 'checked', checkedAll);
        }
      },
      deep: true
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
