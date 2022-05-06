import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import compressDist, { CompressOptions } from 'rollup-plugin-compress-dist'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
// 打包自动生成压缩包zip, tar ,tgz(tar.gz)
const compressOpts: CompressOptions<'zip'> = {
  type: 'zip',
  archiverName: 'dist.zip',
  sourceName: 'dist',
}

export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    compressDist(compressOpts),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/var.scss";',
        charset: false,
      },
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {
      // 地图代理
      '/mapdata': {
        target: 'https://szshzl.zjzwfw.gov.cn',
        changeOrigin: true,
      },
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    minify: 'esbuild',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          const res: string[] = []
          if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
            res.push('vendor')
          }
          return ''
        },
      },
    },
    chunkSizeWarningLimit: 2048,
  },
})
