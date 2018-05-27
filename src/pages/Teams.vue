<template>
  <div id="teams">
    <md-progress-spinner md-mode="indeterminate" v-if="orderedTeams.length == 0"></md-progress-spinner>
    <md-list class="md-triple-line" v-if="orderedTeams.length > 0">
      <md-list-item v-for="team in orderedTeams" :key="team.id" :to="'/teams/' + team.id">
        <md-avatar>
          <img :src="'https://www-league.nhlstatic.com/builds/site-core/86d4b76cc03a4d111ee0e20f9f62eb054eef3b74_1502985652/images/logos/team/current/team-' + team.id + '-dark.svg'" :alt="team.name">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ team.name }}</span>
          <span>{{ team.conference.name }}, {{ team.division.name }}</span>
          <p>{{ team.venue.name }}, {{ team.venue.city }}</p>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'Teams',
  data () {
    return {
      teams: []
    }
  },
  created: function () {
    this.axios
      .get('https://statsapi.web.nhl.com/api/v1/teams/')
      .then(response => {
        this.teams = response.data.teams
      })
  },
  computed: {
    orderedTeams: function () {
      return this._.orderBy(this.teams, ['conference.name', 'division.name'])
    }
  }
}
</script>
