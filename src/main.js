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
import Games from './pages/Games.vue'
import GamesSingle from './pages/GamesSingle.vue'
import Players from './pages/Players.vue'
import PlayersSingle from './pages/PlayersSingle.vue'

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
    { path: '/games', name: 'Games', component: Games },
    { path: '/games/:id', name: 'Game in detail', component: GamesSingle },
    { path: '/players', name: 'Players', component: Players },
    { path: '/players/:id', name: 'Player in detail', component: PlayersSingle }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
