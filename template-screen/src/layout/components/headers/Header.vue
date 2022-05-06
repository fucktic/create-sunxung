<template>
  <div class="page-parent-wrapper header-wrapper"> </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'PageHeader',
    setup(props) {
      console.log('props', props)
      const con = ref('')
      console.log('con', con.value)
    },
  })
</script>

<style lang="scss" scoped>
  .header-wrapper {
    bottom: 0;
    left: 0;
  }
</style>
