<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="user_team in user_teams">
    <h3>id: {{user_team.id }} | name:{{  user_team.user_team_name }}</h3>
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