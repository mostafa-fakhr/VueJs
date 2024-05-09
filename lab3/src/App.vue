<template>
  <NavBar v-if="!$route.meta.hideNavbar" />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
