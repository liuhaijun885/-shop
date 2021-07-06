// vue.config.js
const path = require('path')
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75 //这个值是设计稿等分之后的值(一般是分10份比例)，等分的比例必须与页面rem的比例一致(与屏幕等分一致) 
  // 假如设计稿的宽度是750px 则这里remUnit的值就是75。
})

module.exports = {
  // 外面只能写vue封装webpack后的配置 文档里有
  configureWebpack: { //这里面写webpack原生的配置(vue没有封装的其他的webpack配置)  例如配置路径别名
    // 引入模块的解析
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名 (先找.js 找不到就找.vue 找不到就找.json 还找不到就报错)
      alias: { // 路径别名(简写方式)引入模块的路径别名
        // 'vue$': 'vue/dist/vue.esm.js', // 表示精准匹配   带vue编译器  改变默认引入vue的文件
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },


  lintOnSave: false, //关闭Eslint的规则  写完一部分代码后再打开，让它帮我们检查写的代码的错误，在修改代码 
  devServer: {
    proxy: {
      // 处理以/api开头路径的请求
      // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
      '/api': {
        target: 'http://localhost:4000', // 转发的目标地址
        pathRewrite: {
          '^/api': '' // 转发请求时去除路径前面的/api
        },
        changeOrigin: true
      },

      '/gh': {
        target: 'https://api.github.com', // 转发的目标地址
        pathRewrite: {
          '^/gh': '' // 转发请求时去除路径前面的/api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      }
    },
    // historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}