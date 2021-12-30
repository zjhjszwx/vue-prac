<template>
  <el-table
    :data="formatData"
    :row-style="showRow"
    v-bind="$attrs"
    size="small"
    :max-height="maxHeight"
    v-loading="listLoading"
    :highlight-current-row="highlightCurrentRow"
    @row-click="handleRowClick"
    empty-text="暂无数据"
    element-loading-text="加载中..."
  >
    <!-- <el-table-column v-if="columns.length === 0" width="150">
      <template slot-scope="scope">
        <span
          v-for="space in scope.row._level"
          class="ms-tree-space"
          :key="space"
        />
        <span
          class="tree-ctrl"
          v-if="iconShow(0, scope.row)"
          @click="toggleExpanded(scope.$index)"
        >
          <i v-if="!scope.row._expanded" class="el-icon-plus" />
          <i v-else class="el-icon-minus" />
        </span>
        {{ scope.$index }}
      </template>
    </el-table-column> -->

    <el-table-column
      v-for="(column, index) in columns"
      :key="column.value"
      :label="column.text"
      :width="column.width"
      v-if="
        column.type !== 'button' &&
        column.type !== 'iconButton' &&
        columns.length > 0
      "
    >
      <my-tree-column
        v-for="(child, index) in column.children"
        :key="index"
        :item="child"
        v-if="column.children"
      />

      <template slot-scope="scope">
        <span
          v-if="index === 0"
          v-for="space in scope.row._level"
          class="ms-tree-space"
          :key="space"
        />
        <span
          class="tree-ctrl"
          v-if="iconShow(index, scope.row)"
          @click="toggleExpanded(scope.$index)"
        >
          <i v-if="!scope.row._expanded" class="el-icon-plus" />
          <i v-else class="el-icon-minus" />
        </span>
        <span
          v-html="
            formatter(
              scope.row[column.value],
              column.formatter,
              scope.row,
              column.filter,
              column.filterParams
            )
          "
        />
      </template>
    </el-table-column>
    <!-- <el-table-column
      v-for="column in columns"
      :key="column.value"
      :label="column.text"
      :width="column.width"
      align="center"
      v-if="column.type === 'button' && columns.length > 0"
    >
      <template slot-scope="scope">
        <el-button
          v-if="column.type === 'button'"
          size="mini"
          @click="key.click(scope, $event)"
          v-for="(key, num) in column.list(scope.row)"
          :key="num"
          :type="key.type"
          >{{ key.value }} 123
        </el-button>
      </template>
    </el-table-column> -->

    <!--操作-->
    <el-table-column
      v-for="column in columns"
      :key="column.value"
      :label="column.text"
      :width="column.width"
      align="center"
      v-if="column.type === 'iconButton' && columns.length > 0"
    >
      <template slot-scope="scope">
        <div v-if="column.type === 'iconButton'">
          <span v-for="(key, num) in column.list(scope.row)" :key="num">
            <el-tooltip :content="key.value" placement="top">
              <span
                style="font-size: 15px"
                class="icon iconfont projectColor pointer"
                :class="key.class"
                @click="key.click(scope, $event)"
                >{{ key.value }}</span
              >
            </el-tooltip>
            <span
              class="projectColor"
              style="
                position: absolute;
                margin-left: -5px;
                font-weight: 700;
                opacity: 0.5;
              "
              v-if="num < column.list(scope.row).length - 1"
              >|</span
            >
          </span>
        </div>
      </template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
import treeToArray from "./eval";
// import buttonPrivilege from '@/directive/buttonPrivilege'
import myTreeColumn from "./myTreeColumn";

export default {
  name: "TreeTable",
  // directives: {
  //   buttonPrivilege
  // },
  components: {
    myTreeColumn,
  },
  props: {
    maxHeight: {
      type: String || Number,
      default: () => {
        return;
      },
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: [Array, Object],
      required: true,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    evalFunc: {
      type: Function,
      default: function () {},
    },
    evalArgs: {
      type: Array,
      default: () => [],
    },
    expandAll: {
      type: Boolean,
      default: false,
    },
    listLoading: { type: Boolean, default: false },
  },
  computed: {
    // 格式化数据源
    formatData: function () {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        if (this.data.length > 0) {
          // 组装参数
          tmp = this.treeListUtil(this.data);
        } else {
          tmp = this.data;
        }
      }
      const func = treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      // debugger

      return func.apply(null, args);
    },
  },
  methods: {
    showRow: function (row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? {
            animation: "treeTableShow 1s",
            "-webkit-animation": "treeTableShow 1s",
          }
        : { visibility: "collapse" };
    },
    // 数据组织
    treeListUtil(data, parentId) {
      const itemArr = [];
      for (let i = 0; i < data.length; i++) {
        const node = data[i];
        if (node.parentId === parentId) {
          node.children = this.treeListUtil(data, node.id);
          itemArr.push(node);
        }
      }
      return itemArr;
    },
    // 切换下级是否展开
    toggleExpanded: function (trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    },
    formatter(value, formatter, row, filter, filterParams) {
      if (!formatter) {
        if (filter) {
          if (filterParams) {
            const tempArr = [value, ...filterParams];
            return filter(...tempArr);
          } else {
            return filter(value);
          }
        }
        return value;
      } else {
        return formatter(row);
      }
    },
    handleRowClick(row, column, event) {
      this.$emit("row-click", row, column, event);
    },
  },
  mounted() {
    console.log("formatData==", this.formatData);
  },
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: "";
  }
}

.processContainer {
  width: 100%;
  height: 100%;
}

table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
