/* 
一个包含n个用于间接更新状态数据的方法的对象模块
可以包含异步和逻辑处理代码
*/
import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_ERROR
} from './mutation_type.js'

export default {
  async search({
    commit
  }, {
    searchName
  }) {
    // 请求中
    commit(REQUESTING)
    try {
      const response = await axios.get('/gh/search/users', {
        params: {
          q: searchName
        }
      })
      console.log(searchName);
      const result = response.data
      console.log(result);
      const users = result.items.map((item) => ({
        userName: item.login,
        avatar: item.avatar_url,
        userUrl: item.html_url
      }))
      // 如果请求成功，就commit 提交请求成功的mutation
      console.log(users);
      commit(REQ_SUCCESS, users)

    } catch (error) {
      // 如果请求失败，就commit 提交请求失败的mutation
      commit(REQ_ERROR, error.message)
    }
  }
}