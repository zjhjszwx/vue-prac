<template lang="">
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :showCheckbox="showCheckbox"
    >
    </tree-node>
  </div>
</template>
<script>
import TreeNode from "./node";
import { deepCopy } from "../../../utils/assist";
export default {
  name: "tree",
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  created() {
    this.rebuildData();
  },
  watch: {
    data() {
      this.rebuildData();
    }
  },
  methods: {
    rebuildData() {
      // 创建一个深拷贝对象, 防止破坏原来数据
      this.cloneData = deepCopy(this.data);
    },
    emitEvent(eventName, data) {
      // 触发 父级的on-toggle-expand on-check-change事件
      this.$emit(eventName, data)
    }
  }
};
</script>
<style lang=""></style>
