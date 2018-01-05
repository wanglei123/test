<template>
	<div>
		<ul>
    <li @click="choose(item)" v-for="item in data">{{item.value}}</li>
    </ul>
	</div>
</template>
<style scoped>
	body {
	}
</style>
<script>

	export default {
		data() {
			return {};
		},
		components: {},
    props:["data"],
		mixins: [],
		methods: {
		  choose(val){
		    this.$emit("confirm",val.value);
      }
    },
		mounted() {
		}
	};
</script>

