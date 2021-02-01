<template>
  <div>
    <ol>
      <li v-for="item in list" :key="item.item">
        <slot name=""></slot>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Slottemplate",
    props: {
      list: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>