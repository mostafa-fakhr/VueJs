// store.js
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    currentPost: null,
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_POST(state, post) {
      state.currentPost = post;
    },
  },
  actions: {
    async getAllPosts({ commit }) {
      try {
        const response = await axios.get("http://localhost:2000/posts");
        const posts = response.data;
        commit("SET_POSTS", posts);
        return posts;
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
    },
    async getPostById({ commit }, postId) {
      try {
        const response = await axios.get(
          `http://localhost:2000/posts/${postId}`
        );
        const post = response.data;
        commit("SET_CURRENT_POST", post);
        return post;
      } catch (error) {
        console.error("Error fetching post by ID:", error);
        throw error;
      }
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getCurrentPost(state) {
      return state.currentPost;
    },
  },
});
