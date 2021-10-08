<template lang="">
  <div>
    {{ message }}
  </div>
  <div v-once>{{ message }}</div>
  <div v-html="msgHtml"></div>
  <input type="text" v-model="message" />
  <h2 v-if="show">show</h2>
  <h1 v-else>v-else</h1>
  <h2 v-if="20 > 10">v-if表达式</h2>
  <h2 v-show="show">show</h2>
  <p v-for="(item, index) in items" :key="item.message">
    {{ index }}. {{ item.message }}
  </p>
  <p v-for="(value, name) in object" :key="value">{{ name }}:{{ value }}</p>

  <p>Computed reversed message123: "{{ reversedMessage() }}"</p>
</template>
<script>
export default {
  data() {
    return {
      message: "欢迎来到Vue的世界",
      show: true,
      msgHtml: "<p style='color: red'>欢迎来到红色Vue的世界</p>",
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "how to do lists in vue",
        author: "jane doe",
        publishAt: "2010",
      },
    };
  },
  methods: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
  },
  created() {
    this.message = "啦啦啦啦啦啦";
  },
  mounted() {
    this.message = "略略略略略111";
  },
};
</script>
<style lang=""></style>
