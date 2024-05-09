<template>
  <table class="table container">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
        <th scope="col">Tags</th>
        <th scope="col">Reactions</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>
          <ul class="list-unstyled" v-if="Array.isArray(post.tags)">
            <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
          </ul>
        </td>
        <td>{{ post.reactions }}</td>
        <td>
          <Button class="btn btn-dark" @click="HandleDelete(post.id)"
            >Delete Post</Button
          >
        </td>
        <td>
          <router-link class="btn btn-dark" :to="`/posts/${post.id}`"
            >See more</router-link
          >
        </td>
        <td>
          <router-link class="btn btn-dark" :to="`/add/${post.id}`"
            >Edit Post</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PostsPage",
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    HandleDelete(postId) {
      this.$store.dispatch("deletePost", postId);
    },
  },
  mounted() {
    this.$store.dispatch("getAllPosts");
  },
};
</script>

<style scoped></style>
