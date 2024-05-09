import { createApp } from "vue";
import App from "./App.vue";
import Store from "./Store";
// import StorePosts from "../src/components/CompositionAPI/StorePosts";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Pages/Home.vue";
import PostsPage from "./components/Pages/PostsPage.vue";
import PostDetails from "./components/Pages/PostDetails.vue";
import AddPost from "./components/Pages/AddPost.vue";
import ErrorPage from "./components/Pages/ErrorPage.vue";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostDetails,
  },
  {
    path: "/add",
    component: AddPost,
  },
  {
    path: "/add/:id",
    component: AddPost,
  },
  {
    path: "/:NotFound(.*)*",
    component: ErrorPage,
    meta: { hideNavbar: true },
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// to use Store
createApp(App).use(router).use(Store).mount("#app");

// to use StorePosts
// createApp(App).use(router).use(StorePosts).mount("#app");
