/* 
一个包含n个用于直接更新状态数据的方法的对象模块
*/
import {
  REQUESTING,
  REQ_ERROR,
  REQ_SUCCESS
} from './mutation_type.js'

export default {
  // 请求中
  [REQUESTING](state) {
    state.firstView = false
    state.loading = true
  },
  // 请求成功
  [REQ_SUCCESS](state, users) {
    state.users = users,
      state.loading = false
  },
  // 请求失败
  [REQ_ERROR](state, errorMsg) {
    state.errorMsg = errorMsg
    state.loading = false

  }
}