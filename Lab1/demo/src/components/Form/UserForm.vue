<template>
  <div class="container">
    <!-- Name and Age fields -->
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="input-group mb-3">
          <span class="input-group-text">Name</span>
          <input
            v-model.trim.lazy="formValues.name"
            type="text"
            class="form-control"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div v class="input-group mb-3">
          <span class="input-group-text">Age</span>
          <input
            v-model.lazy.number="formValues.age"
            type="number"
            class="form-control"
            placeholder="Enter your age"
          />
        </div>
      </div>
    </div>

    <!-- Radio buttons -->
    <div class="row mt-4">
      <div class="">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">Admin</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">User</label>
        </div>
      </div>
    </div>

    <!-- Submit button -->
    <div class="row d-flex justify-content-center align-items-center mt-5">
      <button
        @click="HandleSubmit()"
        type="submit"
        class="btn btn-primary w-50"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  provide() {
    return {
      name: this.formValues.name,
      age: this.formValues.age,
    };
  },
  data() {
    return {
      formValues: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    HandleSubmit() {
      // e.preventDefault();
      console.log(this.formValues);
      this.$emit("userData", {
        name: this.formValues.name,
        age: this.formValues.age,
      });
    },
  },
};
</script>

<style scoped></style>
