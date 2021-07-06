<template>
  <div>
    <mt-tabbar class="mtTabbar" fixed>
      <mt-tab-item
        id="外卖"
        class="tab_item"
        :class="{ on: $route.path === '/home' }"
        @click.native="goTo('/home')"
      >
        <div class="iconfont icon-_waimai" style="font-size: 25px"></div>
        外卖
      </mt-tab-item>
      <mt-tab-item
        id="搜索"
        class="tab_item"
        :class="{ on: $route.path === '/search' }"
        @click.native="goTo('/search')"
      >
        <div
          class="iconfont icon-sousuo"
          :class="{ on: $route.path === '/order' }"
          style="font-size: 25px"
        ></div>
        搜索
      </mt-tab-item>
      <mt-tab-item
        id="订单"
        class="tab_item"
        :class="{ on: $route.path === '/order' }"
        @click.native="goTo('/order')"
      >
        <div class="iconfont icon-dingdan" style="font-size: 25px"></div>
        订单
      </mt-tab-item>
      <mt-tab-item
        id="我的"
        class="tab_item"
        :class="{ on: $route.path === '/profile' }"
        @click.native="goTo('/profile')"
      >
        <div class="iconfont icon-user" style="font-size: 25px"></div>
        我 的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "FootGuide",
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
  },
  methods: {
    goTo(path) {
      // 编程式路由跳转
      this.$router.push(path);
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
$color = green
.mtTabbar
  top-border-1px(pink)
  background-color #ccc
.tab_item
  &.on
    color $green
  &div
    margin-bottom 5px
</style>
