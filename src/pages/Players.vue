<template>
  <div id="players">
    <md-progress-spinner md-mode="indeterminate" v-if="players.length == 0"></md-progress-spinner>
    <md-list class="md-triple-line">
      <md-list-item v-for="player in orderedPlayers" :key="player.person.id" :to="'/players/' + player.person.id">
        <md-avatar>
          <img :src="'https://nhl.bamcontent.com/images/headshots/current/168x168/' + player.person.id + '.png'" :alt="player.person.fullName">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ player.person.fullName }}</span>
          <span>{{ player.position.type }} - {{ player.position.name }}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'PLAYERS',
  data () {
    return {
      players: []
    }
  },
  created: function () {
    this.axios
      .get('https://statsapi.web.nhl.com/api/v1/teams/15/roster/')
      .then(response => {
        this.players = response.data.roster
      })
  },
  computed: {
    orderedPlayers: function () {
      return this._.orderBy(this.players, 'person.name')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
