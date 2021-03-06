/* 
 项目的js入口文件
*/

import Vue from 'vue'
import 'lib-flexible/flexible' //移动端适配。将屏幕宽度等分10份

import {
  Tabbar,
  TabItem
} from "mint-ui";
import router from './router'
import App from './App'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App), //创建App的组件对象并返回，最终会将App组件渲染到页面。 h代表creatElement   
  router // 一旦注册好router，所有组件都能看到 $router和$route   可以用<router-link>和<router-view>(必用)
  // render: h => h(App),这个render相当于 下面的components注册组件以及template

  // 下面这个方法需要用带编译器变(要编译template)的版本的vue ，上面的不需要带编译器的版本。 如果直接替换会报错。带编译器的版本打包后会比不带编译器版本的大
  // 3.0优化了2.0需要带编译器版本的vue这个事情
  // components: {
  //   App
  // },
  // template: '<App/>'
}).$mount('#app')