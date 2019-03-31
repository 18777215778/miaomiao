import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie/index'
import mineRouter from './mine/index'
import cinemaRouter from './cinema/index'
console.log(movieRouter)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
