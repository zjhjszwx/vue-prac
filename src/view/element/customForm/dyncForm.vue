<template lang="">
  <div>
    <div v-for="(item, index) of fieldArray">
      <div v-if="item.htmlElements === '输入框'">
        <el-form-item :label="item.showName">
          <el-input
            v-model="fieldObj[item.showName]"
            :max="item.fieldLength"
            :placeholder="item.desc"
            show-word-limit
          ></el-input>
        </el-form-item>
      </div>
      <template v-if="item.htmlElements === '文本域'">
        <el-form-item :label="item.showName">
          <el-input
            type="textarea"
            rows="4"
            :placeholder="item.desc"
            v-model="fieldObj[item.showName]"
            :maxlength="item.fieldLength"
            show-word-limit
          ></el-input>
        </el-form-item>
      </template>
      <template v-if="item.htmlElements === '日历控件'">
        <el-form-item :prop="item.showName" :label="item.showName">
          <el-date-picker
            v-model="fieldObj[item.showName]"
            :name="item.showName"
            type="date"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :placeholder="item.desc"
          ></el-date-picker>
        </el-form-item>
      </template>
      <template v-if="item.htmlElements === '下拉框'">
        <el-form-item :label="item.showName">
          <el-select
            v-model="fieldObj[item.showName]"
            :placeholder="item.describe"
          >
            <el-option
              v-for="items in job"
              :key="items.name"
              :label="items.name"
              :value="items.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </template>
      <template v-if="item.htmlElements === '单选框'">
        <el-form-item :label="item.showName">
          <template v-for="(child, index) in sex">
            <el-radio v-model="fieldObj[item.showName]" :label="child.value">{{
              child.name
            }}</el-radio>
          </template>
        </el-form-item>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldArray: {
      type: Array,
      default: () => []
    },
    fieldObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sex: [
        {
          // 性别
          name: "男",
          value: "male"
        },
        {
          name: "女",
          value: "female"
        }
      ],
      hobbies: [
        // 爱好
        {
          name: "吃饭",
          value: "吃饭"
        },
        {
          name: "玩游戏",
          value: "玩游戏"
        },
        {
          name: "打豆豆",
          value: "打豆豆"
        }
      ],
      job: [
        {
          // 职业
          name: "医生",
          value: "doctor"
        },
        {
          name: "老师",
          value: "teacher"
        },
        {
          name: "司机",
          value: "driver"
        }
      ]
    };
  }
};
</script>
<style lang=""></style>
