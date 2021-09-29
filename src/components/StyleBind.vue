<template lang="">
  <div class="static" :class="classObject">
    11
  </div>
  <div @click="counter += 1">* {{ counter }}</div>
  <div @click="add">+</div>
  <input type="text" v-model="message" placeholder="edit me" />
  <p>Message is {{ message }}</p>
  <select v-model="selected">
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected }}</span>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      classObject: {
        test: true,
        "text-danger": false,
      },
      counter: 0,
      message: "message",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  methods: {
    add: function(event) {
      this.counter += 1;
    },
  },
};
</script>
<style>
.static {
  color: red;
}
</style>
