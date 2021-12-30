<template lang="">
  <div style="padding:10px">
    <el-tabs  v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane class="tab-1" label="确定算薪资人员" name="1">
        <el-form ref="form" :model="form" :inline="true" label-width="80px" label-suffix=":" label-position="right">
          <el-form-item label="员工姓名">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="员工姓名"></el-input>
          </el-form-item>
          <el-form-item label="工号">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="工号"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="部门"></el-input>
          </el-form-item>
          <el-form-item label="员工类型">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="员工类型"></el-input>
          </el-form-item>
          <el-form-item label="员工状态">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="员工状态"></el-input>
          </el-form-item>
          <el-form-item label="离职状态">
            <el-input size="small" class="label-item-width" v-model="form.user" placeholder="离职状态"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" icon="el-icon-search">搜索</el-button>
            <el-button size="small" type="default" icon="el-icon-delete">清空</el-button>
          </el-form-item>
        </el-form>

        <avue-crud :option="option"  :data="data" ref="crud" :page.sync="page" @on-load="onLoad">
          <template slot-scope="scope" slot="menuLeft">
            <el-button type="primary"
              size="small"
              @click.stop="$refs.crud.rowAdd()">修改算薪人员</el-button>
              <el-button type="default"
              size="small"
              @click.stop="$refs.crud.rowAdd()">导出算薪人员</el-button>
              <el-button type="primary"
              size="small"
              @click.stop="$refs.crud.rowAdd()">同步人员数据</el-button>
          </template>
          <template slot="4" slot-scope="{row}">
  <el-tag>{{row['4']}}</el-tag>
</template>
          <template slot="5" slot-scope="{row}">
  <el-tag>{{row['5']}}</el-tag>
</template>

        </avue-crud>
      </el-tab-pane>
      <el-tab-pane label="定薪调薪" name="2">
        xx
      </el-tab-pane>
      <el-tab-pane label="核算薪资" name="3">
        xx
      </el-tab-pane>
      <el-tab-pane label="调薪完成" name="4">
        xx
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      form: {
        user: ''
      },
      page: {
        pageSize: 20,
        pagerCount: 5
      },
      data: [{
        name: '张三',
        1: 12345,
        2: "测试部门",
        3: "全职",
        4: "试用",
        5: "在职",
        6: "2020-10-10",
        7: "",
      },
      {
        name: '李四',
        1: 12345,
        2: "测试部门",
        3: "全职",
        4: "试用",
        5: "在职",
        6: "2020-10-10",
        7: "",
      }],
      option: {
        columnBtn: true,
        addBtn: false,
        index: true,
        indexLabel: '序号',
        border: true,
        editBtn: false,
        stripe: true,
        searchBtn: false,
        column: [{
          label: '员工姓名',
          prop: 'name',
        }, {
          label: '工号',
          prop: '1',
        }, {
          label: '部门',
          prop: '2',
        }, {
          label: '员工类型',
          prop: '3',
        }, {
          label: '员工状态',
          prop: '4',
          slot: true,
        }, {
          label: '离职状态',
          prop: '5',
          slot: true,
        }, {
          label: '入职日期',
          prop: '6',
        }, {
          label: '最后工作日期',
          prop: '7',
        }]
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onLoad(page) {
      this.page.total = 50
    }
  }
}
</script>
<style lang="scss">
.tab-1 {
  padding: 0 40px;
  margin: 0 auto;
  .label-item-width {
    width: 120px;
  }
}
</style>
