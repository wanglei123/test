<template>
  <div class="hello">
    <input type="button" value="-" @click="deHandle">
    <span>{{num}}</span>
    <input type="button" value="+" @click="addHandle">
    {{num2}}
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';   // 解构赋值

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    /*
    computed:mapState({
      num : state => state.count;  1,
      npm : "count"                 2,
      npm(state){                   3,
      return state.count+100;
      }
      count:"count"
    })
    computed:mapState(["count"]);
    */
    computed: {
      num() {
        return this.$store.state.count;
      },
      num2() {
        return this.$store.getters.filterCount;
      },
      ...mapGetters({num2: "filterCount"}),
      ...mapState(["count"])
    },
    methods: {
//      addHandle(){
////        this.$store.commit("add",{
////          n:5
////        });
//        //触发一个异步action
//        this.$store.dispatch("addAction");
//      },
      ...mapActions({
        addHandle: "addAction"
      }),
      ...mapMutations({
        deHandle: "de"
      }),
      deHandle() {
        this.$store.commit({
          type: "de",  //提交mutation名称，
          de: 10         //传的另一个参数
        });
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
