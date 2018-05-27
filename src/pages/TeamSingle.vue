<template>
  <div id="team-single">
    
  </div>
</template>

<script>
export default {
  name: 'TeamSingle',
  data () {
    return {
      team: []
    }
  },
  created: function () {
    // this.axios
    //   .get('https://statsapi.web.nhl.com/api/v1/game/' + this.$route.params.id + '/feed/live')
    //   .then(response => {
    //     console.log(response)
    //     this.game = response.data.gameData
    //   })
  }
}
</script>
