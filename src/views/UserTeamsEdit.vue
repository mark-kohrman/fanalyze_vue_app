<template>
  <div class="user_teams_edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">

        <h1>Edit your team</h1>
        {{user_team}}
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>QB</label>
              <input v-model="user_team.qb.player_name" type="text" class="form-control" placeholder="QB" id="qb" required data-validation-required-message="Please enter your team's quarterback.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>RB</label>
              <input v-model="user_team.rb1.player_name" type="text" class="form-control" placeholder="RB" id="rb1" required data-validation-required-message="Please enter your team's running back.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>RB</label>
              <input v-model="user_team.rb2.player_name" type="text" class="form-control" placeholder="RB" id="rb2" required data-validation-required-message="Please enter your team's running back.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>WR</label>
              <input v-model="user_team.wr1.player_name" type="text" class="form-control" placeholder="WR" id="wr1" required data-validation-required-message="Please enter your team's wide receiver.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>WR</label>
              <input v-model="user_team.wr2.player_name" type="text" class="form-control" placeholder="WR" id="wr2" required data-validation-required-message="Please enter your team's wide receiver.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Flex</label>
              <input v-model="user_team.flex.player_name" type="text" class="form-control" placeholder="Flex" id="flex" required data-validation-required-message="Please enter your team's flex option.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>TE</label>
              <input v-model="user_team.te.player_name" type="text" class="form-control" placeholder="TE" id="te" required data-validation-required-message="Please enter your team's tight end.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
           <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Kicker</label>
              <input v-model="user_team.k.player_name" type="text" class="form-control" placeholder="Kicker" id="k" required data-validation-required-message="Please enter your team's Kicker.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <button class="btn btn-primary" id="sendMessageButton" v-on:click="submit">Edit</button>
        </form> 
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
      user_team: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      console.log("updating team");
      var params = {
        qb_player_id: this.user_team.qb.player_name,
        rb1_player_id: this.user_team.rb1.player_name,
        rb2_player_id: this.user_team.rb2.player_name,
        wr1_player_id: this.user_team.wr1.player_name,
        wr2_player_id: this.user_team.wr2.player_name,
        flex_player_id: this.user_team.flex.player_name,
        te_player_id: this.user_team.te.player_name,
        kicker_player_id: this.user_team.k.player_name,
      };

      console.log(params);

      axios
        .patch(`/api/user_teams/${this.$route.params.id}`, params)
        .then((response) => {
          this.$router.push("/user_teams");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showUserTeam: function () {
      console.log("showing the team now!!!!");
      console.log(this.$route.params.id);

      axios.get(`/api/user_teams/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user_team = response.data;
      });
    },
  },
  created: function () {
    this.showUserTeam();
  },
};
</script>