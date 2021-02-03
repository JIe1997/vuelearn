<template>
  <ul style="width:68%;">
    <li class="flex j-b a-c" v-for="item in list" :key="item.id">
      <div>
        <h4>{{item.title}}</h4>
        <p>{{item.desc}}</p>
      </div>
      <div>
        <img :src="item.pic" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['list'],
    
  }
</script>

<style scoped>

</style>