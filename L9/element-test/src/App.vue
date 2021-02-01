<template>
  <div id="app" class="flex flex-col">
    <Header></Header>
    <div class="flex-1 flex">
      <Left></Left>
      <div>
        1
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Left from './components/Left'

export default {
  components: {
    Header,
    Left
  }
}
</script>

<style lang="scss">
#app{
  height: 100vh;
}
</style>
