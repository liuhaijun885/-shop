/* 
所有的路由配置
*/


import Home from '../pages/Home/Home'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default [{
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/order',
    component: Order,
    name: 'order'
  },
  {
    path: '/profile',
    component: Profile,
    name: 'profile'
  },
  {
    path: '/search',
    component: Search,
    name: 'search'
  },
  {
    path: '/',
    redirect: '/home'
  }
]