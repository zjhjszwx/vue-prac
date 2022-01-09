  <template>
  <div style="padding:20px">
    <el-button @click="handleAdd">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <CustomForm ref="model" :form="form"></CustomForm>
  </div>
</template>
<script>
import CustomForm from './customForm/index.vue'
export default {
  components: { CustomForm },
  data() {
    return {
      form: {
        name: {
          x: ""
        }
      },
      tableData: [{
        name: '王小',
        desc: {
          flag: true,
          inputArrays: [
            {
              name: 1,
              value1: "1",
              value2: "1"
            },
            {
              name: 2,
              value1: "1",
              value2: "1"
            },
          ]
        }
      }, {
        name: '王虎',
        desc: {
          flag: true,
          inputArrays: [
            {
              name: 1,
              value1: "2",
              value2: "2"
            },
            {
              name: 2,
              value1: "2",
              value2: "2"
            },

          ]
        }
      }]
    }
  },
  methods: {
    handleAdd() {
      this.$refs.model.drawer = true
      this.form = {
        name: {
          x: ""
        },
        region: '',
        desc: {
          flag: false,
          inputArrays: [
            {
              name: 1,
              value1: "",
              value2: ""
            },
            {
              name: 2,
              value1: "",
              value2: ""
            },
          ]
        }
      }

    },
    handleEdit(row) {
      this.$refs.model.drawer = true
      this.form = JSON.parse(JSON.stringify(row))

    }
  },
  updated() {
    console.log('tableData===', this.tableData)
  }
}
  </script>
<style lang="">
</style>
