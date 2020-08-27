<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ name  }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Fanalyze your Team!",
      name: "My name is mark",
    };
  },
  created: function () {},
  methods: {},
};
</script>