<template>
  <div id="app">
    <ul class="nav-box">
      <!--<a href="#/">首页</a>-->
      <router-link :to="index" exact tag="li" event="mouseover">
        <i></i>
        <span>首页</span>
      </router-link>
      <!--<a href="#/about">about</a>-->
      <router-link :to="{path:'/about'}" tag="li" active-class="active-class">
        <i></i>
        <span>about</span>
      </router-link>
      <!--<a href="#/document">document</a>-->
      <router-link to="/document/#abc" tag="li">
        <i></i>
        <span>document</span>
      </router-link>
      <router-link to="/user" tag="li">
        <i></i>
        <span>user</span>
      </router-link>
    </ul>

    <router-view name="silder"></router-view><!--这里的class可以设置路由页面的共享样式-->

    <router-view class="center"></router-view><!--这里的class可以设置路由页面的共享样式-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        index: "/"
      }
    }
  }
</script>

<style rel="stylesheet/scss" scoped lang="scss">
  $none: none;
  $float-left: left;
  .nav-box {
    overflow: hidden;
  }
  .nav-box li {
    list-style: $none;
    float: $float-left;
    cursor: pointer;
    width:100px;
    height:100px;
    text-align: center;
    line-height:100px;
  }
  .is-active{
    background: #ccc;
  }
  .active-class{
    background: yellow;
  }
  .center{
    text-align: center;
  }

</style>
