<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Teams:</h2>
    <div v-for="user_team in user_teams">
    <h2> <a v-bind:href="`/user_teams/${user_team.id}`"> {{ user_team.user_team_name }} </a> </h2>

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
      message: "Click on your team to get started and view projections by player!",
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