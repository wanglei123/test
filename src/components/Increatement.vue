<template>
  <div>
    <my-input :is-show.sync="listShow" :value="inputValue"></my-input>
    <list :data="datalist" @confirm="getData" v-show="listShow"></list>
  </div>
</template>
<style  scoped>
  body {
  }
</style>
<script>
  import myInput from "@/components/myInput"
  import list from "@/components/list"

  let data = [{value:"jqeruy"},{value:"javascript"},{value:"html+css"}];

  export default {

    name: 'wanglei1',
    data() {
      return {
        listShow: false,
        datalist:data,
        inputValue:""
      }
    },
    components: {
      myInput,
      list
    },
    mixins: [],
    methods: {
      getData(val){
      this.inputValue = val;
      }

    },
    mounted() {
    }
  };
</script>

