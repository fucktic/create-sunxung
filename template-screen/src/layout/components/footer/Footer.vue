<template>
  <div class="page-parent-wrapper footer-wrapper"> </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'PageFooter',
    setup(props) {
      console.log('props', props)
      const con = ref('')
      console.log('con', con.value)
    },
  })
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    bottom: 0;
    left: 0;
  }
</style>
