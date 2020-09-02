<template>
  <div class="user_teams_new">
    <form v-on:submit.prevent="submit()">

      <h1> Edit your team </h1>
      <h1> {{ user_team.user_team_name }} </h1>
  
      <div class="form-group">
        <label> QB: </label>
        <input type="text" class="form-control" v-model="user_team.qb_player_id">
      </div>

      <div class="form-group">
        <label> RB: </label>
        <input type="text" class="form-control" v-model="user_team.rb1_player_id">
      </div>

      <div class="form-group">
        <label> RB: </label>
        <input type="text" class="form-control" v-model="user_team.rb2_player_id">
      </div>
      
      <div class="form-group">
        <label> WR: </label>
        <input type="text" class="form-control" v-model="user_team.wr1_player_id">
      </div>

      <div class="form-group">
        <label> WR: </label>
        <input type="text" class="form-control" v-model="user_team.wr2_player_id">
      </div>

      <div class="form-group">
        <label> Flex: </label>
        <input type="text" class="form-control" v-model="user_team.flex_player_id">
      </div>

        <div class="form-group">
        <label> TE: </label>
        <input type="text" class="form-control" v-model="user_team.te_player_id">
      </div>


      <div class="form-group">
        <label> K: </label>
        <input type="text" class="form-control" v-model="user_team.kicker_player_id">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
   </form>   
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
      user_team: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      console.log("editing team");
      var params = {
        user_team_name: this.user_team.user_team_name,
        qb_player_id: this.user_team.qb_player_id,
        rb1_player_id: this.user_team.rb1_player_id,
        rb2_player_id: this.user_team.rb2_player_id,
        wr1_player_id: this.user_team.wr1_player_id,
        wr2_player_id: this.user_team.wr2_player_id,
        flex_player_id: this.user_team.flex_player_id,
        te_player_id: this.user_team.te_player_id,
        kicker_player_id: this.user_team.kicker_player_id,
      };

      console.log(params);

      axios
        .patch(`/api/user_teams/${this.$route.params.id}`, params)
        .then((response) => {
          this.$router.push(`/user_teams/${this.$route.params.id}`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    showUserTeam: function () {
      console.log("showing the team!!!");
      console.log(this.$route);

      axios.get(`/api/user_teams/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
      });
    },
    created: function () {
      this.showUserTeam();
    },
  },
  mixins: [Vue2Filters.mixin],
};
</script>