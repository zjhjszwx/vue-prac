<template>
  <el-table-column :prop="item.value" :label="item.text" :row-style="{height:'80px', lineHeight: '80px'}">
    <template v-if="item.children">
      <my-tree-column v-for="(item, index) in item.children" :key="index" :item="item"/>
    </template>
    <template slot-scope="scope">
      <span style="height:80px; line-height: 80px" v-html="formatter(scope.row[item.value],item.formatter,scope.row,item.filter,item.filterParams)"></span>
    </template>
  </el-table-column>
</template>

<script>
  // import buttonPrivilege from '@/directive/buttonPrivilege'

  export default {
    name: 'MyTreeColumn',
    // directives: {
    //   buttonPrivilege
    // },
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      formatter(value, formatter, row, filter, filterParams) {
        if (!formatter) {
          if (filter) {
            if (filterParams) {
              const tempArr = [value, ...filterParams]
              return filter(...tempArr)
            } else {
              return filter(value)
            }
          }
          return value
        } else {
          return formatter(row)
        }
      },
      iconShow(index, record) {
        return (index === 0 && record.children && record.children.length > 0)
      }
    }
  }
</script>
<style scoped>
</style>

