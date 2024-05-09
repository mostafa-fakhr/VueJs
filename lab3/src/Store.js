import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_POST_BY_ID(state, postData) {
      const index = state.posts.findIndex((post) => post.id === postData.id);
      if (index !== -1) {
        state.posts.splice(index, 1, postData);
      }
    },
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    UPDATE_POST(state, updatedPost) {
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
      }
    },
    DELETE_POST(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
  actions: {
    getAllPosts({ commit }) {
      axios
        .get("http://localhost:2000/posts")
        .then((res) => {
          commit("GET_POSTS", res.data);
        })
        .catch((err) => console.error(err));
    },
    async getPostById({ commit }, postId) {
      try {
        const response = await axios.get(
          `http://localhost:2000/posts/${postId}`
        );
        const postData = response.data;
        commit("GET_POST_BY_ID", postData);
        return postData;
      } catch (error) {
        console.error("Error fetching post by ID:", error);
        throw error;
      }
    },

    deletePost({ commit }, postId) {
      axios
        .delete(`http://localhost:2000/posts/${postId}`)
        .then(() => {
          commit("DELETE_POST", postId);
        })
        .catch((err) => console.error(err));
    },
    createPost({ commit }, postData) {
      axios
        .post("http://localhost:2000/posts", postData)
        .then((res) => {
          commit("ADD_POST", res.data);
        })
        .catch((err) => console.error(err));
    },
    updatePost({ commit }, postData) {
      axios
        .put(`http://localhost:2000/posts/${postData.id}`, postData)
        .then(() => {
          commit("UPDATE_POST", postData);
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
  },
});
