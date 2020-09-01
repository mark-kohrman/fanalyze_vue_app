<template>
  <div class="user_teams_new">
    <h1>Enter your team name</h1>
    <p>Team Name: <input v-model="newUserTeam" type="text"></p>
    <p>QB: <input v-model="qbPlayerId" type="text"></p>
    <p>RB: <input v-model="rb1PlayerId" type="text"></p>
    <p>RB: <input v-model="rb2PlayerId" type="text"></p>
    <p>WR: <input v-model="wr1PlayerId" type="text"></p>
    <p>WR: <input v-model="wr2PlayerId" type="text"></p>
    <p>Flex: <input v-model="flexPlayerId" type="text"></p>
    <p>TE: <input v-model="tePlayerId" type="text"></p>
    <p>K: <input v-model="kPlayerId" type="text"></p>
  


    <button v-on:click="addUserTeam()">Add Team</button>

    
   
  </div>
</template>

<style>
</style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  data: function () {
    return {
      user_teams: [],
      players: [],
      newUserTeam: "1",
      qbPlayerId: "2",
      rb1PlayerId: "3",
      rb2PlayerId: "4",
      wr1PlayerId: "5",
      wr2PlayerId: "6",
      flexPlayerId: "7",
      tePlayerId: "8",
      kPlayerId: "9",
      errors: [],
    };
  },
  methods: {
    addUserTeam: function () {
      console.log("adding team");
      var params = {
        user_team_name: this.newUserTeam,
        qb_player_id: this.qbPlayerId,
        rb1_player_id: this.rb1PlayerId,
        rb2_player_id: this.rb2PlayerId,
        wr1_player_id: this.wr1PlayerId,
        wr2_player_id: this.wr2PlayerId,
        flex_player_id: this.flexPlayerId,
        te_player_id: this.tePlayerId,
        kicker_player_id: this.kPlayerId,
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
    getPlayerName: function () {
      console.log("getting player name!!!!");
      axios.get("/api/players").then((response) => {
        console.log(response.data);
      });
    },
  },
  mixins: [Vue2Filters.mixin],
};
</script>