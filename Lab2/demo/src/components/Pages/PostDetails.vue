<template>
  <div class="container card my-4">
    <h1 class="my-4 card-header">Post Details</h1>
    <h2>Post Id : {{ id }}</h2>
    <h3 class="fw-bold">{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <h3>Tags</h3>

    <p v-if="post.tags">{{ post.tags.join(", ") }}</p>
    <p v-else>
      {{ post.tags }}
    </p>

    <p>Number Of Reactions : {{ post.reactions }}</p>
  </div>
</template>

<script>
import GetPost from "../../../public/Mixins/GetPost.js";
export default {
  name: "PostDetails",
  mixins: [GetPost],
  created() {
    this.id = this.$route.params.id;
    this.GetPostById();
  },
};
</script>

<style scoped></style>
