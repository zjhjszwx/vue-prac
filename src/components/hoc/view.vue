<template>
  <div>
    <div>
      {{ result.status }}
      {{ result.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => { }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      requestParams: {
        name: 'http'
      }
    }
  }
}
</script>
