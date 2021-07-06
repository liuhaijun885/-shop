/* 
 项目的js入口文件
*/

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //创建App的组件对象并返回，最终会将App组件渲染到页面。 h代表creatElement   
  store

  // render: h => h(App),这个render相当于 下面的components注册组件以及template

  // 下面这个方法需要用带编译器变(要编译template)的版本的vue ，上面的不需要带编译器的版本。 如果直接替换会报错。带编译器的版本打包后会比不带编译器版本的大
  // 3.0优化了2.0需要带编译器版本的vue这个事情
  // components: {
  //   App
  // },
  // template: '<App/>'
}).$mount('#app')