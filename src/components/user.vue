<template>
  <div>
    我是user
    <div>
      <!--<router-link style="margin-left: 20px;" :to="'/user/'+item.tip+'/'+item.id" :key="index"-->
                   <!--v-for="(item,index) in dataList">-->
        <!--{{item.name}}-->
      <!--</router-link>-->
      <router-link style="margin-left: 20px;" :to="{path:'/user/'+item.tip+'/'+item.id,query:{a:'1',b:'3'}}" :key="index"
                   v-for="(item,index) in dataList">
        {{item.name}}
      </router-link>
    </div>
    <div v-if="userInfo.name">
      <p>id：{{userInfo.id}}</p>
      <p>姓名：{{userInfo.name}}</p>
      <p>年龄：{{userInfo.age}}</p>
    </div>

    <hr>
    <div v-if="userInfo.name">
      <!--<router-link exact to="?info=fllow">他的关注</router-link>-->
      <!--<router-link exact to="?info=">他的分享</router-link>-->
      <router-link exact :to="{path:'',query:{a:'1',b:'3'}}">他的关注</router-link>
      <router-link exact :to="{path:'',query:{a:'5',b:'6'}}">他的分享</router-link>
    </div>

    <div>
      {{$route.query}}
    </div>


  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  body {
    .is-active{
      background: #ccc;
    }
  }
</style>
<script>

  export default {
    data() {
      return {
        dataList: [
          {id: 1, tip: "vip", name: "wang", age: 12},
          {id: 2, tip: "vip", name: "li", age: 33},
          {id: 3, tip: "common", name: "zhang", age: 55}
        ],
        userInfo: {},
      };
    },
    watch: {
      $route() {
        this.getData();
      }
    },
    created() {
      /*
      *route 是一个路由实例,渲染组件时会调用一次生命周期函数，复用组件时，不会调用该代码，地址一旦发生变化，不会调用该组件，
      地址变化时，会重新生成一个路由对象
      */
      this.getData();
    },
    methods: {
      getData() {
        let id = this.$route.params.userId;
        if (id) {
          this.userInfo = this.dataList.filter((item) => {
            return item.id == id
          })[0];
        } else {
          this.userInfo = {}
        }
      }
    }
  };
</script>

