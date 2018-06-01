<template>
	<router-view></router-view>
</template>

<script>
	export default {
		name: 'home',
		created() {
			this.$router.replace(this.$route.fullPath == '/' ? '/registration' : this.$route.fullPath);
		}
	}
</script>

<style>

</style>