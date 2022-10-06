import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import SubNav from './components/SubNav.vue'
import FindMusic from './views/Second/FindMusic.vue'
import RankingList from './views/Second/RankingList.vue'
import SongList from './views/Second/SongList.vue'
import Anchor from './views/Second/Anchor.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/SubNav/FindMusic',
  },
  {
    path: '/SubNav',
    component: SubNav,
    children: [
      {
        path: 'FindMusic',
        component: FindMusic,
      },
      {
        path: 'RankingList',
        component: RankingList,
      },
      {
        path: 'SongList',
        component: SongList,
      },
      {
        path: 'Anchor',
        component: Anchor,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
