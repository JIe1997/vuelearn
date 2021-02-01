<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  header{
    height: 60px;
    display: flex;
    align-items:center;
    padding: 0 20px;
    background: #000;
    color: #fff;
  }
</style>