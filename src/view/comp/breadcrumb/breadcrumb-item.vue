<template lang="">
  <span class="breadcrumb-item">
    <!-- exact 没有任何按键被按下才触发 -->
    <a
      v-if="to"
      :href="linkUrl"
      :target="target"
      :class="linkClasses"
      @click.exact="handleCheckClick($event, false)"
      @click.ctrl="handleCheckClick($event, true)"
      @click.meta="handleCheckClick($event, true)">

      <slot></slot>
    </a>
    <span v-else :class="linkClasses">
      <slot></slot>
    </span>
    <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
    <span :class="separatorClasses" v-else>
        <slot name="separator"></slot>
    </span>
  </span>
</template>
<script>
import mixinsLink  from '../mixins/link'
const prefixCls = 'breadcrumb-item';
export default {
  mixins: [ mixinsLink ],
  data() {
    return {
      separator: '',
      showSeparator: false
    }
  },
  computed: {
    linkClasses() {
      return `${prefixCls}-link`
    },
    separatorClasses() {
      return `${prefixCls}-separator`
    }
  },
  mounted() {
    this.showSeparator = this.$slots.separator !== undefined;
  }
}
</script>
<style lang="scss">
  .breadcrumb-item {

  }
</style>
