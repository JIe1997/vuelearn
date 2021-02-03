<template>
  <div class="container flex j-b">
    <List :list="artilceList"></List>
    <Recomment :list="recommmentList"></Recomment>
  </div>
</template>

<script>
  import List from '@/components/List'
  import Recomment from '@/components/Recomment'

  export default {
    components: {
      List,
      Recomment
    },
    async created () {
      let {data} = await this.axios('/data/home.json')
      this.artilceList = data.data.artilceList
      this.recommmentList = data.data.recommmentList
    },
    data() {
      return {
        artilceList: [],
        recommmentList: []
      }
    },
  }
</script>

<style scoped>

</style>