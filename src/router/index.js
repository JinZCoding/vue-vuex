import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/index'
import Item from '@/page/item'
import Score from '@/page/Score'
import '../style/common.less'
import '../config/rem.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    }
  ]
})
