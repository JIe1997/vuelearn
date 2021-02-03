<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import '/css/css.css';
@import '/fonts/iconfont.css';

.container{
  width: 1200px;
  margin: 0 auto;
}
</style>
