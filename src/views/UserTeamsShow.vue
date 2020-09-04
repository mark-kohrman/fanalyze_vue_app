<template>
  <div class="home">

    <h1>{{ user_team.user_team_name }}</h1>

  <div class="container">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Team</th>
      <th scope="col">Projection</th>
      <th scope="col">Weather Proj</th>
      <th scope="col">Total Proj</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ user_team.qb.player_name  }}</th>
      <td>{{ user_team.qb.position  }} </td>
      <td>{{ user_team.qb.nfl_team  }} </td>
      <td>{{ user_team.qb.projected_points  }}</td>
      <td>{{ user_team.qb.weather_projected_points  }}</td>
      <td>{{ user_team.qb.total_projected_points  }}</td>

    </tr>
    <tr>
      <th scope="row">{{ user_team.rb1.player_name  }}</th>
      <td>{{ user_team.rb1.position  }}</td>
      <td>{{ user_team.rb1.nfl_team  }} </td>
      <td>{{ user_team.rb1.projected_points  }}</td>
      <td>{{ user_team.rb1.weather_projected_points  }}</td>
      <td>{{ user_team.rb1.total_projected_points  }}</td>
    </tr>
    <tr>
      <th scope="row">{{ user_team.rb2.player_name  }}</th>
      <td>{{ user_team.rb2.position  }}</td>
      <td>{{ user_team.rb2.nfl_team  }} </td>
      <td>{{ user_team.rb2.projected_points  }}</td>
      <td>{{ user_team.rb2.weather_projected_points  }}</td>
      <td>{{ user_team.rb2.total_projected_points  }}</td>
     <tr>
      <th scope="row">{{ user_team.wr1.player_name  }}</th>
      <td>{{ user_team.wr1.position  }} </td>
      <td>{{ user_team.wr1.nfl_team  }} </td>
      <td>{{ user_team.wr1.projected_points  }}</td>
      <td>{{ user_team.wr1.weather_projected_points  }}</td>
      <td>{{ user_team.wr1.total_projected_points  }}</td>

    </tr>
     <tr>
      <th scope="row">{{ user_team.wr2.player_name  }}</th>
      <td>{{ user_team.wr2.position  }} </td>
      <td>{{ user_team.wr2.nfl_team  }} </td>
      <td>{{ user_team.wr2.projected_points  }}</td>
      <td>{{ user_team.wr2.weather_projected_points  }}</td>
      <td>{{ user_team.wr2.total_projected_points  }}</td>

    </tr>
     <tr>
      <th scope="row">{{ user_team.flex.player_name  }}</th>
      <td>{{ user_team.flex.position  }} </td>
      <td>{{ user_team.flex.nfl_team  }} </td>
      <td>{{ user_team.flex.projected_points  }}</td>
      <td>{{ user_team.flex.weather_projected_points  }}</td>
      <td>{{ user_team.flex.total_projected_points  }}</td>

    </tr>
     <tr>
      <th scope="row">{{ user_team.te.player_name  }}</th>
      <td>{{ user_team.te.position  }} </td>
      <td>{{ user_team.te.nfl_team  }} </td>
      <td>{{ user_team.te.projected_points  }}</td>
      <td>{{ user_team.te.weather_projected_points  }}</td>
      <td>{{ user_team.te.total_projected_points  }}</td>

    </tr>
     <tr>
      <th scope="row">{{ user_team.k.player_name  }}</th>
      <td>{{ user_team.k.position  }} </td>
      <td>{{ user_team.k.nfl_team  }} </td>
      <td>{{ user_team.k.projected_points  }}</td>
      <td>{{ user_team.k.weather_projected_points  }}</td>
      <td>{{ user_team.k.total_projected_points  }}</td>

    </tr>
  </tbody>
</table>
</div>

    <p> <a v-bind:href="`/user_teams/${this.$route.params.id}/edit`"> Edit my team </a> </p>
    <p> <a v-bind:href="`/user_teams`"> Go back to My Teams </a> </p>

    <button class="btn btn-primary" id="sendMessageButton" v-on:click="deleteUserTeam()">Delete Team</button>

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
    deleteUserTeam: function () {
      console.log("deleting the team!!!!");
      axios.delete(`api/user_teams/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/user_teams");
      });
    },
  },
};
</script>