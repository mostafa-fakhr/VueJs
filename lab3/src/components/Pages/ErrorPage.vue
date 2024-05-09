<template>
  <div class="container d-flex flex-column justify-content-center align-items-center py-5">
    <img src="@/assets/error.jpg" alt="Error" class="mb-4" style="max-width: 300px;">
    <h1 class="alert alert-danger text-center mb-4">Oops! Something went wrong.</h1>
    <button class="btn btn-danger w-25" @click="handleBack">Back To Home</button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    handleBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
