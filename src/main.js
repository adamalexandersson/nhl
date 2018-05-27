// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './styles/main.scss'

// App
import App from './App'

// Routes
import Home from './pages/Home.vue'
import GameSingle from './pages/GameSingle.vue'
import Teams from './pages/Teams.vue'
import TeamSingle from './pages/TeamSingle.vue'
import Scoreboard from './pages/Scoreboard.vue'
import PlayerSingle from './pages/PlayerSingle.vue'

// Use
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueLodash)
Vue.use(VueMaterial)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/game/:id', name: 'Game in detail', component: GameSingle },
    { path: '/teams', name: 'Teams', component: Teams },
    { path: '/teams/:id', name: 'Team in detail', component: TeamSingle },
    { path: '/players/:id', name: 'Player in detail', component: PlayerSingle },
    { path: '/scoreboard', name: 'Scoreboard', component: Scoreboard }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
