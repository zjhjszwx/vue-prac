<template lang="">
  <div>
    <div class="mb10">
      <el-button
        class="addButton mb10"
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="addDic"
        size="small"
        >添加</el-button
      >
    </div>
    <tree-table
      :data="data"
      :columns="columns"
      :list-loading="listLoading"
      border
    ></tree-table>

    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      destroy-on-close
    >
      <el-form
        label-position="right"
        :rules="rules"
        ref="dicForm"
        label-width="100px"
        :model="dicForm"
        size="small"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="字典名称" prop="name">
              <el-input
                v-model="dicForm.name"
                placeholder="请输入字典名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="字典编码" prop="code">
              <el-input
                v-model="dicForm.code"
                placeholder="请输入字典编码"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="this.saveDic" :loading="loading"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { data } from "./productListData";
import TreeTable from "../../../../components/TreeTable/treeTable";
export default {
  name: "Dictionary",
  components: {
    TreeTable
  },
  data() {
    return {
      data: data.result || [],
      columns: [
        {
          text: "字典名称",
          value: "name"
        },
        {
          text: "字典编码",
          value: "code",
          type: "button"
        },
        {
          text: "操作",
          type: "iconButton",
          width: 120,
          list: this.operButton
        }
      ],
      listLoading: false,
      loading: false,
      dialogFormVisible: false,
      dialogStatus: "create",
      textMap: {
        update: "编辑",
        create: "新建"
      },
      rules: {
        name: [{ required: true, message: "请填写字典名称" }],
        code: [{ required: true, message: "请填写字典编码" }]
      },
      dicForm: {
        id: "",
        parentId: "",
        name: "",
        code: ""
      }
    };
  },

  methods: {
    operButton(val) {
      const temp = [];
      if (!val.parentId) {
        temp.push({
          class: "iconxinzeng",
          value: "添加",
          click: this.addChild
        });
      }
      temp.push({ class: "iconxiugai", value: "修改", click: this.updateDic });
      if (!val.children || val.children.length === 0) {
        temp.push({
          class: "iconshanchu1",
          value: "删除",
          click: this.deleteDic
        });
      }
      return temp;
    },
    // 新增字典
    addDic() {
      this.dialogStatus = "create";
      this.dicForm = {
        id: "",
        parentId: "",
        name: "",
        code: ""
      };
      this.dialogFormVisible = true;
    },
    saveDic() {
      this.$refs.dicForm.validate(valid => {
        if (valid) {
          console.log(this.dicForm);
          if (this.dicForm.id) {
            // 删除
            // this.data.splice(this.data.findIndex(item => item.id === this.dicForm.id), 1)
            // 修改
            const findVal = this.data.find(item => item.id === this.dicForm.id);
            findVal.name = this.dicForm.name;
            findVal.code = this.dicForm.code;
          }
          this.dialogFormVisible = false;
          this.loading = false;
        }
      });
    },
    updateDic(val) {
      this.dialogStatus = "update";
      this.dicForm.id = val.row.id;
      this.dicForm.parentId = val.row.parentId;
      this.dicForm.name = val.row.name;
      this.dicForm.code = val.row.code;
      this.dialogFormVisible = true;
    }
  },
  mounted() {
    console.log('data===', this.data);
  }
};
</script>
<style lang=""></style>
