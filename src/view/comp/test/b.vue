<template lang="">
  <div>
    B component
    <comp-c></comp-c>
    <comp-d></comp-d>
    <button @click="handleEmitEvent">click</button>
  </div>
</template>
<script>
import compC from './c'
import compD from './d'

export default {
  data() {
    return {
      name: 'B component'
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    compC,
    compD
  },
  methods: {
    handleEmitEvent() {
      this.$emit('test', 'component B callback')
    }
  },
  mounted() {
    console.log('this.$parent.name=',this.$parent.name);
    console.log('this.$children[0].name=',this.$children[0].name);
    console.log('this.$children[1].name=',this.$children[1].name);
    console.log(this.title);
     this.$on("test", text => {
      console.log("$on=", text);
    });
  },
}
</script>
<style lang="">
  
</style>