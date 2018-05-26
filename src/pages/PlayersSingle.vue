<template>
  <div id="players">
    <img :src="'https://nhl.bamcontent.com/images/actionshots/' +  player.id + '_low_resolution.jpg'">
    <div class="md-headline">{{ player.fullName }} {{ player.primaryNumber }}</div>
  </div>
</template>

<script>
export default {
  name: 'player-single',
  data () {
    return {
      player: []
    }
  },
  created: function () {
    this.axios
      .get('http://statsapi.web.nhl.com/api/v1/people/' + this.$route.params.id)
      .then(response => {
        this.player = response.data.people[0]
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
