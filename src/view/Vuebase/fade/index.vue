<template lang="">
  <div>
    <button @click="show = !show">切换</button>
    <transition name="bounce">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="">
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
  color: red;
}
</style>
