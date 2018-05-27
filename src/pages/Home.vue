<template>
  <div id="home">
    <md-progress-spinner md-mode="indeterminate" v-if="dates.length == 0"></md-progress-spinner>
    <div class="block" v-for="date in dates.slice().reverse()" :key="date.date">
      <span class="md-subheading">{{ date.date }}</span>
      <md-card v-for="game in date.games.slice().reverse()" :key="game.gamePk" :to="'/games/' + game.gamePk">
        <md-card-header>
          <!-- <template v-if="game.content.media.epg[2].items.length > 0">
            <video :width="game.content.media.epg[2].items[0].playbacks[9].width" :height="game.content.media.epg[2].items[0].playbacks[9].height" controls preload="none">
              <source :src="game.content.media.epg[2].items[0].playbacks[9].url" type="video/mp4">
            </video>
          </template> -->
        </md-card-header>
        <md-card-content>
          <h5>{{game.teams.home.team.name}} ({{game.linescore.teams.home.goals}}) - {{game.teams.away.team.name}} ({{game.linescore.teams.away.goals}})</h5>
          <p><small>{{game.venue.name}}</small></p>
          <md-button :to="{ name: 'Game in detail', params: { id: game.gamePk, game: game }}" class="md-raised md-primary">See More</md-button>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dates: []
    }
  },
  created: function () {
    this.axios
      .get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2018-03-01&endDate=2018-06-01&hydrate=linescore,game(content(media(epg),highlights(scoreboard)),seriesSummary)')
      .then(response => {
        this.dates = response.data.dates
        console.log(this.dates)
      })
  }
}
</script>

<style lang="scss" scoped>
  #games {
    padding: 1rem;
  }

  .block {
    width: 100%;
  }

  .md-card {
    width: 100%;
    margin: 0 0 1rem 0;
    display: inline-block;
    vertical-align: top;
  }
</style>
