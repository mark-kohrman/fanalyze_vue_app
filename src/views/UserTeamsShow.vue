<template>
  <div class="home">

    <h1> {{ user_team.user_team_name }}'s Team</h1>

    <table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Position</th>
    <th>Team</th>
    <th>Projection</th>
    <th>Weather Proj</th>
    <th>Total Proj</th>


  </tr>
  <tr>
    <td>{{ user_team.qb.player_name  }}</td>
    <td>{{ user_team.qb.position  }}</td>
    <td>{{ user_team.qb.nfl_team  }}</td>
    <td>{{ user_team.qb.projected_points  }}</td>
    <td>{{ user_team.qb.weather_projected_points  }}</td>
    <td>{{ user_team.qb.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.rb1.player_name  }}</td>
    <td>{{ user_team.rb1.position  }}</td>
    <td>{{ user_team.rb1.nfl_team  }}</td>
    <td>{{ user_team.rb1.projected_points  }}</td>
    <td>{{ user_team.rb1.weather_projected_points  }}</td>
    <td>{{ user_team.rb1.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.rb2.player_name  }}</td>
    <td>{{ user_team.rb2.position  }}</td>
    <td>{{ user_team.rb2.nfl_team  }}</td>
    <td>{{ user_team.rb2.projected_points  }}</td>
    <td>{{ user_team.rb2.weather_projected_points  }}</td>
    <td>{{ user_team.rb2.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.wr1.player_name  }}</td>
    <td>{{ user_team.wr1.position  }}</td>
    <td>{{ user_team.wr1.nfl_team  }}</td>
    <td>{{ user_team.wr1.projected_points  }}</td>
    <td>{{ user_team.wr1.weather_projected_points  }}</td>
    <td>{{ user_team.wr1.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.wr2.player_name  }}</td>
    <td>{{ user_team.wr2.position  }}</td>
    <td>{{ user_team.wr2.nfl_team  }}</td>
    <td>{{ user_team.wr2.projected_points  }}</td>
    <td>{{ user_team.wr2.weather_projected_points  }}</td>
    <td>{{ user_team.wr2.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.te.player_name  }}</td>
    <td>{{ user_team.te.position  }}</td>
    <td>{{ user_team.te.nfl_team  }}</td>
    <td>{{ user_team.te.projected_points  }}</td>
    <td>{{ user_team.te.weather_projected_points  }}</td>
    <td>{{ user_team.te.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.flex.player_name  }}</td>
    <td>{{ user_team.flex.position  }}</td>
    <td>{{ user_team.flex.nfl_team  }}</td>
    <td>{{ user_team.flex.projected_points  }}</td>
    <td>{{ user_team.flex.weather_projected_points  }}</td>
    <td>{{ user_team.flex.total_projected_points  }}</td>
  </tr>
  <tr>
    <td>{{ user_team.k.player_name  }}</td>
    <td>{{ user_team.k.position  }}</td>
    <td>{{ user_team.k.nfl_team  }}</td>
    <td>{{ user_team.k.projected_points  }}</td>
    <td>{{ user_team.k.weather_projected_points  }}</td>
    <td>{{ user_team.k.total_projected_points  }}</td>
  </tr>
</table>

    <p> <a v-bind:href="`/user_teams/${this.$route.params.id}/edit`"> Edit my team </a> </p>
    <p> <a v-bind:href="`/user_teams`"> Go back to My Teams </a> </p>

  


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Grid from "gridjs-vue";

export default {
  name: "UserTeams",
  data: function () {
    return {
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