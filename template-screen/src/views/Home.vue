<template>
  <div>
    <n-icon size="40" color="green">
      <access-time-20-regular />
    </n-icon>
    <n-button type="primary">我是按钮</n-button>
    <div id="tianditu"></div>
  </div>
</template>

<script lang="ts">
  import { getCascaderData } from '@/api/base'
  import { onMounted, defineComponent } from 'vue'
  import { getGeoJson } from '@/utils/tianditu/geo-json'
  export default defineComponent({
    name: 'HomeWorker',
    setup() {
      onMounted(() => {
        getCascaderData().then((res) => {
          console.log('返回信息', res)
        })

        getGeoJson('富阳区', '330111').then((res) => {
          console.log(res, '地图返回值')
        })
        // 初始化oss

        // console.log('mini', minioClient)
      })
    },
  })
</script>

<style></style>
