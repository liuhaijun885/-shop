<template>
  <div>
    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <h2 v-else-if="loading">正在请求中......</h2>
    <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.userName">
        <a :href="user.useUrl" target="_blank">
          <img :src="user.avatar" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  name: "Main", // 组件的标识名称
  computed: {
    ...mapState(["firstView", "loading", "errorMsg", "users"]),
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
