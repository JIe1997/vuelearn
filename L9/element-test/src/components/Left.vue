<template>
  <div style="width:200px;background:#000;">
    <el-menu
      default-active="1"
      background-color="#000"
      text-color="#fff"
      active-text-color="skyblue"
      class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-location"></i>
          <span slot="title">分组一</span>
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