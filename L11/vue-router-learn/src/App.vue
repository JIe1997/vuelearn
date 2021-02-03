<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/user">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
