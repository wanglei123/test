<template>
	<div>
		this is about template
    <h2>{{test}}</h2>
    <hr>
    <ul>
      <!--<router-link to="/about" exact tag="li"><a>study</a></router-link>-->
      <!--<router-link to="/about/work" tag="li"><a>work</a></router-link>-->
      <!--<router-link to="/about/hobby" tag="li"><a>hobby</a></router-link>-->
      <router-link :to="{name:'study'}" exact tag="li"><a>study</a></router-link>
      <router-link :to="{name:'work'}"  tag="li"><a>work</a></router-link>
      <router-link :to="{name:'hobby'}"  tag="li"><a>hobby</a></router-link>
    </ul>
    <router-view></router-view>
	</div>
</template>
<style rel="stylesheet/scss"  scoped>
  .is-active{
    background: yellow;
  }
</style>
<script>

	export default {
		data() {
			return {
			  test:"test"
      };
		},
    //在组件实例创建之前执行，所以说找不到this,在beforeCreate之前,可以肜next中的回调函数来更新数据
    beforeRouteEnter(to,from,next){
      next((vm) => {
        vm.test = 123;
      });
    },
    //有二级菜单时，更新时触发
    beforeRouteUpdate(to,from,next){
      console.log("beforeRouteUpdate");
    },
    //离开组件
    beforeRouteLeave(to,from,next){
      next();
    },
		components: {},
		mixins: [],
		methods: {},
		mounted() {
		}
	};
</script>

