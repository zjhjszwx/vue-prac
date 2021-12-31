<template>
  <div>
    <div v-if="error">failed to load data!</div>
    <div v-else-if="loading">loading...</div>
    <div v-else>result: {{ result }}</div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  data() {
    return {
      result: {
        status: 200,
      },
      loading: false,
      error: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const data = await this.getData();
      console.log(data);
      this.result = data;
    } catch (e) {
      this.error = true;
    } finally {
      this.loading = false;
    }
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

