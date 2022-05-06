<template>
  <div
    :class="useApp.transitionShow ? 'transition-back' : ''"
    :style="{ backgroundImage: useApp.transitionShow ? backgroundImage : '' }"
  >
    <div class="text-loading">{{ useApp.transitionShow ? '加载中...' : '' }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useAppStore } from '@/store/modules/app'
  import loadingImg from '@/assets/images/loading_background.png'
  export default defineComponent({
    name: 'PageLoading',
    setup() {
      const useApp = useAppStore()
      const backgroundImage = `url(${loadingImg})`
      return {
        useApp,
        backgroundImage,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .transition-back {
    position: fixed;
    opacity: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: #000613;
    color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    transition: opacity ease 2s;
    .text-loading {
      position: absolute;
      bottom: calc(14% - 36px);
      font-size: 14px;
    }
  }
</style>
