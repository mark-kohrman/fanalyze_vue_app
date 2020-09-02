<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Fanalyze,sign up, login and click create team on the top right to get started!",
    };
  },
  created: function () {},
  methods: {},
};
</script>