<template>
  <div>
    <HocView></HocView>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import View from './view.vue'
import {wrapperPromise} from './hoc.js'

const fn = (params) => {
  return new Promise(rs => {
    setTimeout(() => {
      rs({
        ...params,
        status: 200,
      })
    },1000)
  })
}

const HocView = wrapperPromise(View, fn)
export default {
  data() {
    return {

    };
  },
  components: {
    HocView,
  },

  methods: {
    getData() {
      return this.$http({
        url: "https://cnodejs.org/api/v1/topics",
        method: "get",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

