// usePosts.js
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";

export default function usePosts() {
  const store = useStore();

  const state = reactive({
    posts: [],
    currentPost: null,
  });

  const getAllPosts = async () => {
    try {
      const posts = await store.dispatch("getAllPosts");
      state.posts = posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const getPostById = async (postId) => {
    try {
      const post = await store.dispatch("getPostById", postId);
      state.currentPost = post;
    } catch (error) {
      console.error("Error fetching post by ID:", error);
    }
  };

  onMounted(getAllPosts);

  return {
    state,
    getAllPosts,
    getPostById,
  };
}
