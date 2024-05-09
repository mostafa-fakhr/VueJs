<template>
  <nav class="navbar navbar-dark bg-dark">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link
              class="nav-link active text-light"
              aria-current="page"
              to="/"
              >Home</router-link
            >
            <router-link class="nav-link text-light" to="/posts"
              >Posts</router-link
            >
            <router-link class="nav-link text-light" to="/add"
              >Add Post</router-link
            >
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped></style>
