<template>
  <div class="container">
    <h1 class="my-5 d-flex justify-content-center">
      {{ id ? "Edit Post" : "Add Post" }}
    </h1>
    <form @submit.prevent="id ? handlePutRequest() : handlePostRequest()">
      <div class="card text-align-center">
        <div class="card-header">{{ id ? "Edit Post" : "Add Post" }}</div>
        <div class="card-body">
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
            <div class="card-body">
              <ul>
                <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
              </ul>
            </div>
          </div>
          <div class="mb-3">
            <label for="reactions" class="form-label">Reactions</label>
            <input
              type="number"
              class="form-control"
              id="reactions"
              v-model.trim="reactions"
            />
          </div>
          <button type="submit" class="btn btn-success">
            {{ id ? "Update" : "Submit" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPost",

  data() {
    return {
      id: "",
      title: "",
      body: "",
      tags: [],
      tagInput: "",
      reactions: "",
    };
  },

  mounted() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.$store
        .dispatch("getPostById", this.id)
        .then((post) => {
          this.title = post.title;
          this.body = post.body;
          this.tags = post.tags;
          this.reactions = post.reactions;
        })
        .catch((error) => {
          console.error("Error fetching post by ID:", error);
        });
    }
  },

  methods: {
    handlePostRequest() {
      const postData = {
        title: this.title,
        body: this.body,
        tags: this.tags,
        reactions: this.reactions,
      };

      this.$store
        .dispatch("createPost", postData)
        .then(() => {
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    },
    handlePutRequest() {
      const postData = {
        id: this.id,
        title: this.title,
        body: this.body,
        tags: this.tags,
        reactions: this.reactions,
      };

      this.$store
        .dispatch("updatePost", postData)
        .then(() => {
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    },
    addTag() {
      if (this.tagInput.trim() !== "") {
        this.tags.push(this.tagInput.trim());
        this.tagInput = "";
      }
    },
  },
};
</script>

<style scoped></style>
