<template>
  <div id="app">
    <h1>{{`基于Element-UI组件改造的树形选择器`}}:</h1>
    <!-- 调用树形下拉框组件 -->
    <!-- 下拉树 -->
    <SelectTree
      :options="list"
      :value="valueId"
      @getValue="getValue($event)"
      height="200"
    ></SelectTree>
    ID为：{{valueId}}
  </div>
</template>

<script>
import SelectTree from "./treeSelect.vue";
export default {
  name: "app",
  components: {
    SelectTree
  },
  data() {
    return {
      valueId: 1, // 初始ID（可选）
      // 选项列表（必选）
      list: [
        {
          id: 1,
          name: "一级菜单A",
          children: [{
            id: 2,
            name: "一级菜单A-1",
            children: [{
              id: 3,
              name: "一级菜单A-1-1",
            }]
          }]
        },
        {
          id: 4,
          name: "一级菜单B",
        }
      ],
    };
  },
  computed: {

  },
  methods: {
    // 取值
    getValue(value) {
      this.valueId = value;
      console.log(this.valueId);
    }
  }
};
</script>

<style lang="">

</style>
