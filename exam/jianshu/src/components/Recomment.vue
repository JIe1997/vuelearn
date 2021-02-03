<template>
  <div style="width:28%">
    <div v-for="item in list" :key="item.id">
      <img style="width:100%" :src="item.pic" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style scoped>

</style>