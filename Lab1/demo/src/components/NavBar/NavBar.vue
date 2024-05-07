<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
      </div>
    </nav>
    <UserForm />
    <UserAndAdmin />
  </div>
</template>

<script>
import UserForm from "../Form/UserForm.vue";
import UserAndAdmin from "../UserAndAdmin/UserAndAdmin.vue";
export default {
  components: { UserForm, UserAndAdmin },

  name: "NavBar",
};
</script>

<style scoped></style>
