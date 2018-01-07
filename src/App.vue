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
    {{$route.meta.index}}

    <!--<router-view name="silder"></router-view>&lt;!&ndash;这里的class可以设置路由页面的共享样式&ndash;&gt;-->

    <transition :name="names" >
      <!-- 添加 name属性，可以自定义运动方向，例如：name：left(从左侧进入)等，从左或者右来运动的话，要去掉mode='out-in 否则切换的中间会有空白-->
      <router-view class="center"></router-view><!--这里的class可以设置路由页面的共享样式-->

    </transition>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        index: "/",
        names:'left'
      }
    },
    watch:{
      $route(to,from){
        if (to.meta.index < from .meta.index){
          this.names = "right";
        }else{
          this.names='left';
        }
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
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }

  .is-active {
    background: #ccc;
  }

  .active-class {
    background: yellow;
  }

  .center {
    text-align: center;

  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-enter-active {
    transition: 1s;
  }
  .v-leave{
    opacity:1;
  }
  .v-leave-to{
    opacity:0;
  }

  .v-leave-active{
    transition: 2s;
  }


  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-active,.left-leave-active{
    transition: 1s;
  }
  .left-leave-to{
    transform:translateX(-100%);
  }
  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-active,.right-leave-active{
    transition: 1s;
  }
  .right-leave-to{
    transform:translateX(100%);
  }

</style>
