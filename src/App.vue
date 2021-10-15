<template>
  <div id="app">
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import cnHeader from "./cnode/Header";

export default {
  name: "app",
  components: {
    cnHeader
  }
};
</script>

<style>
html {
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
body,
div,
span,
a,
p,
ul,
li {
  margin: 0;
  padding: 0;
}
</style>
