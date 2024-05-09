<template>
  <div class="container my-5">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">Post Details</h1>
        <h3 class="card-subtitle mb-2 text-muted text-center">{{ post.id }}</h3>
        <h2 class="card-title text-center">{{ post.title }}</h2>
        <p class="card-text text-center">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PostDetails",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
    post() {
      return this.posts.find((post) => post.id === this.$route.params.id);
    },
  },

  mounted() {
    this.$store.dispatch("getAllPosts");
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 40px;
}
</style>
