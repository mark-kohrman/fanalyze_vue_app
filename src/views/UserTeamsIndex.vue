<template>
  <div class="home">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div v-for="user_team in user_teams" class="post-preview">
          <a v-bind:href="`/user_teams/${user_team.id}`">
            <h2 class="post-title">
              {{ user_team.user_team_name }}
            </h2>
          </a>
          <p class="post-meta">A fantasy team created on
            <a href="#"></a>
            {{user_team.created_at}}</p>
          <hr>
        </div>
   
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>

    
    <!-- <div v-for="user_team in user_teams">
    <h2> <a v-bind:href="`/user_teams/${user_team.id}`"> {{ user_team.user_team_name }} </a> </h2>

    </div> -->

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