export default {
  path: '/movie',
  component: () => import('@/views/Movie/index.vue'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City/index.vue')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying/index.vue')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon/index.vue')
    },
    {
      path: 'search',
      component: () => import('@/components/Search/index.vue')
    },
  ]
}