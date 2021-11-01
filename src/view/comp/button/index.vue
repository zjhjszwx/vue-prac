<template lang="">
  <div>
    <i-button size="large" >
      按钮
    </i-button>
    <i-button size="small" disabled>
      按钮
    </i-button>
    <i-button size="default" @test="handleClick">
      按钮
    </i-button>
    <button @click="handleBroadCast">broadcast</button>
  </div>
</template>
<script>
import iButton from "./i-button";
import Emitter from '../mixins/emitter'

export default {
  name: 'myButton',
  mixins:[Emitter],
  components: {
    iButton,

  },
  methods: {
    handleBroadCast(e) {
      // iButton是子组件, 那就是广播
      this.broadcast('iButton', 'on-message', 'Hello Vue.js');
    },
    handleClick(e) {
      console.log(e);
    }
  },
  mounted() {
    this.$on('test2', (text) => {
      console.log(text)  
    })
  },
};
</script>
<style lang=""></style>
