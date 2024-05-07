<template>
  <div class="container">
    <h1 class="my-5">Posts Page</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Tags</th>
          <th scope="col">Reactions</th>
          <th scope="col">Action</th>
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
            <router-link class="btn btn-info" :to="`/posts/${post.id}`">
              See More</router-link
            >
          </td>
          <td>
            <router-link class="btn btn-success" :to="`/add/${post.id}`">
              Edit Post</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" @click="HandleDelete(post.id)">
              Delete Post
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.GetAllPosts();
  },
  methods: {
    GetAllPosts() {
      axios
        .get("http://localhost:2000/posts")
        .then((res) => {
          this.posts = res.data;
          console.log(this.posts);
        })
        .catch((err) => console.log(err));
    },
    HandleDelete(id) {
      axios
        .delete(`http://localhost:2000/posts/${id}`)
        .then((res) => {
          console.log(res);
          // Fetch posts again after successful deletion and to avoid refreshing
          return this.GetAllPosts();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
