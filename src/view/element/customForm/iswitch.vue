<template lang="">
  <div>
    <el-switch :value="value.flag" @input="onInput" v-bind="$attrs"></el-switch>
    <div v-if="value.flag">
        <div v-for="(item, index) in value.inputArrays" :key="item.name">{{ item.name }}
          <el-input min="0" type='number' :value="item[person]" class="item-input" @input="onChange(index, person, $event)"></el-input>
          <el-input min="0" type='number' :value="item[company]" class="item-input" @input="onChange(index, company, $event)"></el-input>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iswitch',
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: {
        flag: false,
        inputArrays: []
      }
    },
    person: {
      type: String,
      default: 'person'
    },
    company: {
      type: String,
      default: 'company'
    },
  },
  methods: {
    onInput(e) {
      let obj = { ...this.value }
      obj.flag = e
      this.$emit('input', obj)
    },
    onChange(index, prop, e) {
      let obj = { ...this.value }
      obj.inputArrays[index][prop] = e
      this.$emit('input', obj)
    }
  }
}
</script>
<style lang="scss" scoped>
.item-input {
  width: 100px;
  margin-left: 10px;
}
</style>
