const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: '@import "@/assets/scss/base.scss";'
//       }
//     }
//   },
//   devServer: {
//     proxy: { // 代理
//       '/api': {
//         target: 'http://yanxuan.xiecheng.live:7001',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
