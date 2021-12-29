<template>
  <avue-crud ref="crud" :option="option" :data="data"></avue-crud>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '张三',
          age: 12,
          address: '码云的地址'
        }, {
          name: '李四',
          age: 13,
          address: '码云的地址'
        }
      ],
      option: {
        viewBtn: true,
        editBtn: false,
        delBtn: false,
        menuWidth: 80,
        column: [{
          label: '姓名',
          prop: 'name'
        }, {
          label: '年龄',
          prop: 'age'
        }, {
          label: '地址',
          span: 24,
          prop: 'address',
          type: 'textarea'
        }]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.crud.rowView(this.data[0], 0)
    })
  },
}
</script>
