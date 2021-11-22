<template lang="">
  <span class="breadcrumb-item">
    <!-- exact 没有任何按键被按下才触发 -->
    <a v-if="to"
      @click.exact="handleCheckClick($event, false)"
      @click.ctrl="handleCheckClick($event, true)"
      @click.meta="handleCheckClick($event, true)">

      <slot></slot>
    </a>
    <span v-else>
      <slot></slot>
    </span>
    <span class="breadcrumb-item-separator">/</span>
  </span>
</template>
<script>
import mixinsLink  from '../mixins/link'
export default {
  mixins: [ mixinsLink ],
  methods: {

  }

}
</script>
<style lang="scss">
  .breadcrumb-item {

  }
</style>
