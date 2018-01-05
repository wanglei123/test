<template>
	<div>
		this is about template
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
			return {};
		},
		components: {},
		mixins: [],
		methods: {},
		mounted() {
		}
	};
</script>

