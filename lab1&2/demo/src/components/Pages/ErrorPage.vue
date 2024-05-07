<template>
  <div class="img-fluid error-page">
    <h1 class="alert alert-danger">Error</h1>
    <img class="w-75" src="../../assets/Error.jpg" alt="" />
    <div class="d-flex flex-column align-items-center">
      <button class="btn btn-dark w-50 mt-3" @click="HandleBack()">
        Back To Home
      </button>
      <router-link class="btn btn-dark w-50 my-3" to="/posts"
        >Back To Posts</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    HandleBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.error-page {
  text-align: center;
}
</style>
