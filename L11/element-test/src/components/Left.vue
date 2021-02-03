<template>
  <div style="width:200px;background:#000;">
    <el-menu
      default-active="/"
      background-color="#000"
      text-color="#fff"
      router
      active-text-color="skyblue"
      class="el-menu-vertical-demo">
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="/about">
          <i class="el-icon-location"></i>
          <span slot="title">关于</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-location"></i>
          <span slot="title">分组二</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>