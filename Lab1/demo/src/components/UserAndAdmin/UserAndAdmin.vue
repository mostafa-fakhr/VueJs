<template>
  <div class="container mt-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{ name }}</td>
          <td>{{ age }}</td>
          <td>@mdo</td>
          <td><button class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ["userData "],
  data() {
    return {
      count: 1,
      userData: [],
    };
  },
  //   computed: {
  //     name() {
  //       console.log(this.userData);
  //       return this.userData;
  //     },
  //     age() {
  //       return this.userData;
  //     },
  //   },
  methods: {
    increase() {
      this.count++;
    },
    updateUser(e) {
      console.log(e);
      this.userData.push(e);
    },
  },
};
</script>

<style scoped></style>
