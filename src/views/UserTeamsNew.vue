<template>
  <div class="user_teams_new">
    <h1>Create Your Dream Team</h1>
    <div class="container">
      <form v-on:submit.prevent="submit()">
        
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Team Name</label>
              <input v-model="newUserTeam" type="text" class="form-control" placeholder="Team Name" id="team name" required data-validation-required-message="Please enter your team name.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
  
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>QB</label>
              <input v-model="qbPlayerId" type="text" class="form-control" placeholder="QB" id="qb" required data-validation-required-message="Please enter your team's quarterback.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>RB</label>
              <input v-model="rb1PlayerId" type="text" class="form-control" placeholder="RB" id="rb1" required data-validation-required-message="Please enter your team's running back.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>RB</label>
              <input v-model="rb2PlayerId" type="text" class="form-control" placeholder="RB" id="rb2" required data-validation-required-message="Please enter your team's running back.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>WR</label>
              <input v-model="wr1PlayerId" type="text" class="form-control" placeholder="WR" id="wr1" required data-validation-required-message="Please enter your team's wide receiver.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>WR</label>
              <input v-model="wr2PlayerId" type="text" class="form-control" placeholder="WR" id="wr2" required data-validation-required-message="Please enter your team's wide receiver.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Flex</label>
              <input v-model="flexPlayerId" type="text" class="form-control" placeholder="Flex" id="flex" required data-validation-required-message="Please enter your team's flex option.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>TE</label>
              <input v-model="tePlayerId" type="text" class="form-control" placeholder="TE" id="te" required data-validation-required-message="Please enter your team's tight end.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
           <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Kicker</label>
              <input v-model="kPlayerId" type="text" class="form-control" placeholder="Kicker" id="k" required data-validation-required-message="Please enter your team's Kicker.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <button class="btn btn-primary" id="sendMessageButton" v-on:click="addUserTeam">Create Team</button>
        </form> 
    </div>
  </div>
</template>

<style>
</style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  data: function () {
    return {
      user_teams: [],
      newUserTeam: "",
      qbPlayerId: "",
      rb1PlayerId: "",
      rb2PlayerId: "",
      wr1PlayerId: "",
      wr2PlayerId: "",
      flexPlayerId: "",
      tePlayerId: "",
      kPlayerId: "",
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
  },
  mixins: [Vue2Filters.mixin],
};
</script>