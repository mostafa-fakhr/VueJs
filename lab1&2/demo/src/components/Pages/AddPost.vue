<template>
  <div class="container">
    <h1 class="my-5">Add Post</h1>
    <h2 v-if="id">Post Id: {{ id }}</h2>
    <form @submit.prevent="id ? HandlePutRequest() : HandlePostRequest()">
      <div class="card text-align-center">
        <div class="card-header">Post</div>
        <div class="card-body">
          <div class="mb-3">
            <label for="id" class="form-label">ID</label>
            <input
              type="number"
              class="form-control"
              id="title"
              v-model.trim="id"
            />
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model.trim="title"
            />
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">Body</label>
            <textarea
              class="form-control"
              id="body"
              rows="4"
              v-model.trim="body"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="tags" class="form-label">Tags</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="tags"
                placeholder="Add a tag"
                v-model.trim="tagInput"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click.prevent="addTag"
              >
                Add Tag
              </button>
            </div>
          </div>
          <div class="card mb-4" v-if="tags.length > 0">
            <ul>
              <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
            </ul>
          </div>
          <div class="mb-3">
            <label for="reactions" class="form-label">Reactions</label>
            <input
              type="text"
              class="form-control"
              id="reactions"
              v-model.trim="reactions"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import GetPost from "../../../public/Mixins/GetPost.js";
export default {
  name: "AddPost",
  mixins: [GetPost],
  data() {
    return {
      id: "",
      title: "",
      body: "",
      tags: [],
      tagInput: "",
      reactions: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.GetPostById();
    }
  },
  methods: {
    addTag() {
      if (this.tagInput.trim() !== "") {
        this.tags.push(this.tagInput.trim());
        this.tagInput = "";
      }
    },
    HandlePostRequest() {
      axios
        .post(`http://localhost:2000/posts`, {
          title: this.title,
          body: this.body,
          tags: this.tags,
          reactions: this.reactions,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/posts");
        })
        .catch((err) => console.log(err));
    },
    HandlePutRequest() {
      axios
        .put(`http://localhost:2000/posts/${this.id}`, {
          title: this.title,
          body: this.body,
          tags: this.tags,
          reactions: this.reactions,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/posts");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
