<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition :name="getTransitionName" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useAppStore } from '@/store/modules/app'
  export default defineComponent({
    name: 'PageHeader',
    setup() {
      const con = ref('')
      const useApp = useAppStore()
      const getTransitionName = useApp.getIsPageAnimate ? useApp.pageAnimateType : ''
      console.log('con', con.value, getTransitionName)
      return {
        getTransitionName,
      }
    },
  })
</script>

<style></style>
