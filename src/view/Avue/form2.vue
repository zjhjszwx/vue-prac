<template>
  <div>
    {{obj}}
    <avue-form :option="option" v-model="obj"></avue-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {},
      option: {
        column: [
          {
            label: '文本1',
            prop: 'text1'
          },
          {
            label: '',
            labelWidth: 40,
            prop: 'divider',
            component: 'elDivider',//ele分割线
            span: 24,
            event: {
              click: () => {
                this.$message.success('点击方法')
              },
            },
            params: {
              html: '<h2 style="color:red">自定义html标签,点我触发方法</h2>',
              contentPosition: "left",
            }
          },
          {
            label: '文本2',
            prop: 'text2'
          },
          {
            label: '',
            labelWidth: 40,
            prop: 'calendar',
            component: 'elCalendar',//ele日期
            span: 24,
            params: {

            }
          }
        ]
      }
    }
  }
}
</script>
