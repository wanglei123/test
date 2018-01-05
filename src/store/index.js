import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    count: 100
  },
  // 类似于.vue中的computed
  getters:{
    filterCount(state){
      return state.count >=120 ? 120 : state.count;
    }
  },
  mutations: {
    add(state, payload) {
      state.count += payload.n;
    },
    de(state, payload) {
      state.count -= payload.de;
    }
  },
  actions: {
    addAction(context) {
      /*也可以用es6中的解构赋值
      addAction({commit,dispatch}) {
      commit("add", {n: 5});
      dispatch("textAction", {text: "删除"});  // 调用另一个actions中方法*/
      setTimeout(() => {
        //改变状态，必须提交一个
        context.commit("add", {n: 5});
        context.dispatch("textAction", {text: "删除"});  // 调用另一个actions中方法
      }, 1000);
    },
    textAction(context, obj) {
      console.log(obj.text);

    }

  }
});

export default store

