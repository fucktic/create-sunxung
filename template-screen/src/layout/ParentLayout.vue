<template>
  <page-loading />
  <page-header />
  <main-view />
</template>

<script lang="ts" setup>
  import MainView from './components/main-views/MainView.vue'
  import PageLoading from './components/loadings/Loadings.vue'
  import PageHeader from './components/headers/Header.vue'
  // import { useAppStore } from '../store/modules/app'

  import store from '@/store'
  const { getHomeData } = store.useAppStore
  getHomeData()
</script>

<style lang="scss" scoped>
  .page-parent-wrapper {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
