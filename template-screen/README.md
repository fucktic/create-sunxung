vue3.0-NaiveUi-Pinia-Vit-TypeScript


本框架基于Vue 3.0版本，vue-router 4.0，Naive-Ui 库，Pinia状态管理器，TypeScript语法，vit管理，全局缩放自适应大屏


相关链接：
 Naive-Ui：https://www.naiveui.com/
 图标库：https://www.xicons.org/#/ 目前只导入fluent  使用教程  https://github.com/07akioni/xicons#installation
 Pinia: https://pinia.vuejs.org/
 Vit: https://cn.vitejs.dev/

 配置文件 /config
          | width  设计稿宽度
          | height 设计稿高度
          | backgroudColor 当屏幕实际比例不符合设计比例留出的边框色
          | isTianditu 动态加载api标签    如果为true  vue组件中,使用全局this.$T
 UI控件按需导入 /plugins
                | naive.ts
 UI全局变量     /styles/theme-vars
                |common.json      
 scss全局变量    /assets/style
                |var.scss                                        
 图标控件按需全局导入 /plugins
                      | icon.ts



 
          


