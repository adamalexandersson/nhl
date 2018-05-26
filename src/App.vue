<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row ">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">{{ $route.name }}</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>refresh</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>

    <md-bottom-bar md-sync-route md-type="fixed" class="fixed-bottom">
      <md-bottom-bar-item to="/" md-label="Home" md-icon="home"></md-bottom-bar-item>
      <md-bottom-bar-item to="/games" md-label="Games" md-icon="assignment"></md-bottom-bar-item>
      <md-bottom-bar-item to="/players" md-label="Players" md-icon="people"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
    players: []
  })
}
</script>

<style lang="scss">
.fixed-bottom {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
}

.search {
  max-width: 400px;
}

.md-list-item-content {
  border-bottom: 1px solid rgba(#000, .12);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
