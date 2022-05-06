<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div
      class="wrapper"
      id="screen-wrapper"
      :style="{
        transform: `scale(${curScale})`,
        width: `${config.width}px`,
        height: `${config.height}px`,
        top: `${curTop}px`,
        left: `${curLeft}px`,
      }"
    >
      <router-view />
    </div>
  </n-config-provider>
</template>
<script setup lang="ts">
  import { onBeforeMount, onMounted, ref } from 'vue'
  import { computedScale } from './utils/computed-scale'
  import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
  import common from './styles/theme-vars/common.json'
  import config from './config'
  //重写navie主题
  const themeOverrides: GlobalThemeOverrides = {
    common,
  }

  const curScale = ref(1)
  const curTop = ref(0)
  const curLeft = ref(0)
  //计算缩放大小、及左边和顶部边框
  const formatScale = () => {
    const { top, scale, left } = computedScale()
    curScale.value = scale
    curTop.value = top
    curLeft.value = left
  }
  onBeforeMount(() => {
    document.body.style.backgroundColor = config.backgroundColor
  })
  onMounted(() => {
    formatScale()
    window.addEventListener('resize', () => {
      formatScale()
    })
  })
</script>
<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    transform-origin: left top;
    overflow: hidden;
  }
</style>
