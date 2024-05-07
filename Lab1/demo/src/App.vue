<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
