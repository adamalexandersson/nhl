<template>
  <div id="games-single">
    <template v-if="game">
      <template v-if="game.content.media.epg[2].items.length > 0">
        <video :width="game.content.media.epg[2].items[0].playbacks[9].width" :height="game.content.media.epg[2].items[0].playbacks[9].height" controls preload="none">
          <source :src="game.content.media.epg[2].items[0].playbacks[9].url" type="video/mp4">
        </video>
      </template>
      <h5>{{game.teams.home.team.name}} ({{game.linescore.teams.home.goals}}) - {{game.teams.away.team.name}} ({{game.linescore.teams.away.goals}})</h5>
      <p><small>{{game.venue.name}}</small></p>
      <pre>{{ game }}</pre>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GamesSingle',
  data () {
    return {
      game: null
    }
  },
  created: function () {
    this.game = this.$route.params.game
    // this.axios
    //   .get('https://statsapi.web.nhl.com/api/v1/game/' + this.$route.params.id + '/feed/live')
    //   .then(response => {
    //     console.log(response)
    //     this.game = response.data.gameData
    //   })
  }
}
</script>

<style lang="scss" scoped>

</style>
