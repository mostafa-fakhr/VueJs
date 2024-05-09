<template>
  <div class="container">
    <h1 class="my-5 d-flex justify-content-center">Posts Using CAPI</h1>
    <ul class="post-list">
      <li v-for="post in state.posts" :key="post.id" class="post-item">
        <div class="post-item-header">
          <div class="post-title">{{ post.title }}</div>
          <button
            @click="toggleDetails(post.id)"
            class="view-details-btn btn btn-dark"
          >
            {{ isDetailsVisible(post.id) ? "Hide Details" : "View Details" }}
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDetailsVisible(post.id)" class="post-details">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import usePosts from "../../components/CompositionAPI/usePosts";

export default {
  setup() {
    const { state, getAllPosts, getPostById } = usePosts();
    const visibleDetails = ref([]);

    const toggleDetails = (postId) => {
      const index = visibleDetails.value.indexOf(postId);
      if (index !== -1) {
        visibleDetails.value.splice(index, 1);
      } else {
        visibleDetails.value.push(postId);
      }
    };

    const isDetailsVisible = (postId) => {
      return visibleDetails.value.includes(postId);
    };

    return {
      state,
      getAllPosts,
      getPostById,
      toggleDetails,
      isDetailsVisible,
    };
  },
};
</script>

<style>
.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  margin-bottom: 20px;
}

.post-item-header {
  display: flex;
  align-items: center;
}

.post-title {
  flex: 1;
}

.view-details-btn {
  margin-left: 10px;
}

.post-details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
