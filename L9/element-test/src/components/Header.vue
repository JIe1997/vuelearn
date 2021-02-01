<template>
  <header class="flex j-b a-c">
    <div class="title">
      LOGO
    </div>
    <el-menu
      :default-active="'1'"
      menu-trigger="click"
      class="el-menu-header"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff"
      mode="horizontal">
      <el-menu-item index="1">消息(20)</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户管理</template>
        <el-menu-item index="2-1">用户管理1</el-menu-item>
        <el-menu-item index="2-2">用户管理2</el-menu-item>
        <el-menu-item index="2-3">用户管理3</el-menu-item>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header{
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  background: #000;
  user-select: none;
}
.title{
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>