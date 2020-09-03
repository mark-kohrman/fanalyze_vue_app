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
      message: "Welcome to Fanalyze, sign up to create a team and get started!",
    };
  },
  created: function () {},
  methods: {},
};
</script>