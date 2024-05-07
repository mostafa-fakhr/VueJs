import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./components/Pages/HomePage.vue";
import AllPosts from "./components/Pages/AllPosts.vue";
import PostDetails from "./components/Pages/PostDetails.vue";
import AddPost from "./components/Pages/AddPost.vue";
import ErrorPage from "./components/Pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/posts",
    component: AllPosts,
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

createApp(App).use(router).mount("#app");
