<template>
  <div id="main">
    <Header title='喵喵电影' />
    <div id="content">
      <div class="movie_menu">
        <div class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="hot_swtich">
          <div class="hot_item">正在热映</div>
          <div class="hot_item">即将上映</div>
        </div>
        <div class="search_entry">
          <i class="iconfont icon-sousou"></i>
        </div>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<script>
  import Header from '@/components/Header/index.vue'
  import TabBar from '@/components/TabBar/index.vue'
  export default {
    name: 'Movie',
    components: {
      Header,
      TabBar
    }
  }
</script>

<style scoped>

</style>