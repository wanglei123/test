<template>
	<div>
    <input type="text" @click="showHandle" :value="value">
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
    props:["isShow","value"],
    computed:{
		  initShow(){
		    return this.isShow;
      }
    },
		components: {},
		mixins: [],
		methods: {
      showHandle(){
        this.$emit("update:isShow",!this.initShow);
      }
    },
		mounted() {
		}
	};
</script>

