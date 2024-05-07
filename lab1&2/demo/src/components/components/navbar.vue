<template>
    <div>
 <nav class="navbar navbar-expand-lg" v-if="!$route.meta.hideNavbar">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active p-5">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item-adjust active p-5">
        <router-link class="nav-link" to="/products">Products</router-link>
      </li>
      <li class="nav-item-adjust active p-5">
        <router-link class="nav-link" to="/add">Add Product</router-link>
      </li>
    </ul>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:'navBar'
    }
</script>

<style scoped>
      nav{
    background: #000000e8;
    height: 90px;
  }

  a{
    color: white !important;;
  }
  .nav-item-adjust {
    padding-left:0px !important;
  }
</style>