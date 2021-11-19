<template lang="">
  <!-- $attrs 包含了父作用域中不作为prop被识别的属性 -->
  <el-table
    :data="formatData"
    v-bind="$attrs"
    size="small"
    row-key="id"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  >
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      :prop="column.value"
      :label="column.text"
      v-if="
        column.type !== 'button' &&
          column.type !== 'iconButton' &&
          columns.length > 0
      "
    >
    </el-table-column>
    <el-table-column
      v-for="column in columns"
      :key="column.value"
      :label="column.text"
      :width="column.width"
      align="center"
      v-if="column.type === 'iconButton' && columns.length > 0"
    >
      <!-- 通过 slot-scope="scope" 来自定义表头 -->
      <template slot-scope="scope">
        <div v-if="column.type === 'iconButton'">
          <span v-for="(key, num) in column.list(scope.row)" :key="num">
            <el-tooltip :content="key.value" placement="top">
              <span @click="key.click(scope, $event)">{{ key.value }}</span>
            </el-tooltip>
          </span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import myTreeColumn from "./myTreeColumn";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    expandAll(index) {
      console.log(index);
    }
  },
  components: {
    myTreeColumn
  },
  computed: {
    formatData() {
      if (this.data) {
        let newArr = this.data.filter(i => !i.leaf);
        newArr.forEach(i => {
          i.children = i.children || [];
          this.data.forEach(t => {
            if (t.leaf && t.parentId === i.id) {
              i.children.push(t);
            }
          });
        });
        console.log(newArr);
        return newArr;
      }
    }
  }
};
</script>
<style lang=""></style>
