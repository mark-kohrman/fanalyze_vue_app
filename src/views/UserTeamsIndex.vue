<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>{{  user_teams  }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "This is the index page where you can view all of your TEAMS!!!",
      user_teams: [],
    };
  },
  created: function () {
    this.indexUserTeams();
  },
  methods: {
    indexUserTeams: function () {
      console.log("this is the index page........");
      axios.get("/api/user_teams").then((response) => {
        console.log(response.data);
        this.user_teams = response.data;
      });
    },
  },
};
</script>