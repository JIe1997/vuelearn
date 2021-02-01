<template>
  <transition-group name="list" tag="ol">
    <li v-for="(item, i) in list" :key="item.id">
      <span>{{item.name}}</span>
      <span>{{item.age}}</span>
      <span><button :disabled="i === 0" @click="move(i, 'top')">↑</button></span>
      <span><button :disabled="i === list.length-1" @click="move(i, 'bottom')">↓</button></span>
      <button @click="del(i)">&times;</button>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [
        {
          id: 0,
          name: '1111',
          age: 20
        },
        {
          id: 1,
          name: '2222',
          age: 30
        },
        {
          id: 2,
          name: '3333',
          age: 40
        },
        {
          id: 3,
          name: '4444',
          age: 50
        }
      ]
    }
  },
  methods: {
    move(i, type) {
      if(type === 'top') {
        this.list.splice(i, 0, ...this.list.splice(i-1, 1))
      }else{
        this.list.splice(i, 0, ...this.list.splice(i+1, 1))
      }
    },
    del(i) {
      this.list.splice(i,1)
    }
  },
}
</script>

<style scoped lang="scss">
  li{
    list-style: none;
    padding: 10px;
  }
  .list-enter-active, 
  .list-leave-active {
    transition: all .5s;
  }
  .list-enter, 
  .list-leave-to{
    opacity: 0;
    transform: translateX(50px);
  }
  .list-move {
    transition: transform 1s;
  }
</style>
