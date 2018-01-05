<template>
  <div>
    我是user
    <div>
      <router-link style="margin-left: 20px;" :to="'/user'+item.id" :key="index" v-for="(item,index) in dataList">
        {{item.name}}
      </router-link>
    </div>


  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  body {
  }
</style>
<script>

  export default {
    data() {
      return {
        dataList: [
          {id: 1, name: "wang", age: 12},
          {id: 2, name: "li", age: 33},
          {id: 3, name: "zhang", age: 55}
        ]
      };
    },
    components: {},
    mixins: [],
    methods: {},
    mounted() {
    }
  };
</script>

