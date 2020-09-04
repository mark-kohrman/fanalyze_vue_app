<template>
  


  <div class="login">
    <div class="container">

      <form v-on:submit.prevent="submit()">

    
      <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{  error  }}</li>
        </ul>

        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." v-model="email">
        </div>
        <div>
          <input type="password" class="form-control" placeholder="Password" id="password" required data-validation-required-message="Please enter your password." v-model="password">
        </div>

        <input type="submit" class="btn btn-primary" value="Submit">
        </form>
    </div>
  </div>  
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          console.log(response.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>