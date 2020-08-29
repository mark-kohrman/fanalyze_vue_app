<template>
  <div class="user_teams_new">
    <h1>Enter your team name</h1>
    <button v-on:click="addUserTeam()">Add Team</button>
   
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      teamName: "",
      errors: [],
    };
  },
  methods: {
    addUserTeam: function () {
      console.log("adding team");
      var params = {
        user_team_name: "Jeff's Team",
      };

      console.log(params);

      axios
        .post("/api/user_teams", params)
        .then((response) => {
          this.$router.push("/user_teams");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>