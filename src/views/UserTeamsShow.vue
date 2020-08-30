<template>
  <div class="home">
    <h1>{{ user_team.user_team_name }}'s Team</h1>
    <p> {{ user_team.qb  }} </p>
    <p> {{ user_team.rb1 }} </p>
    <p> {{ user_team.rb2  }} </p>
    <p> {{ user_team.wr1 }} </p>
    <p> {{ user_team.wr2  }} </p>
    <p> {{ user_team.flex }} </p>
    <p> {{ user_team.te }} </p>
    <p> {{ user_team.k }} </p>


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the show page! This your team",
      user_team: {},
    };
  },
  created: function () {
    this.showUserTeam();
  },
  methods: {
    showUserTeam: function () {
      console.log("showing the team now!!!!");
      console.log(this.$route.params.id);

      axios.get("/api/user_teams/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.user_team = response.data;
      });
    },
  },
};
</script>