<template>
  <div class="signup">
    <div class="container">

      <form v-on:submit.prevent="submit()">

    
      <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{  error  }}</li>
        </ul>

        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." v-model="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" id="password" required data-validation-required-message="Please enter your password." v-model="password">
        </div>

        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password Confirmation" id="passwordConfirmation" required data-validation-required-message="Please enter your password." v-model="passwordConfirmation">
        </div>

        <input type="submit" class="btn btn-primary" value="Submit">
        </form>
    </div>
  </div>  




</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>