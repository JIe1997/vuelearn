<template>
  <div id="app" class="flex flex-col">
    <Header>123</Header>
    <div class="flex flex-1">
      <Left>left</Left>
      <Right>right</Right>
    </div>
  </div>
</template>

<script>
import "./assets/css/css.css"
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'

export default {
  name: 'App',
  components: {
    Header,
    Left,
    Right
  }
}
</script>

<style>
#app{
  height: 100vh;
}
</style>
