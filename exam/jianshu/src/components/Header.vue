<template>
  <header>
    <div class="container flex j-b">
      <img src="/images/logo.png" alt="">
      <div class="nav flex j-b a-c">
        <div class="nav-left flex j-b a-c">
          <nav class="flex">
            <a href="">首页</a>
            <a href="">下载APP</a>
          </nav>
          <div class="flex search-wrap">
            <input type="text" placeholder="搜索">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
        <div class="nav-right flex j-b a-c">
          <a href="">
            <i class="zimu iconfont icon-zimu"></i>
          </a>
          <a class="login-text" href="">登录</a>
          <a class="btn" href="">注册</a>
          <a class="btn btn-primary" href="">
            <i class="iconfont icon-write"></i>
            写文章
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.nav-right a{
  margin-left: 20px;
  color: #969696;
}
.zimu{
  font-size: 24px;
  color: #969696;
}
.login-text{
  font-size: 15px;
}

a.btn{
  padding: 5px 20px;
  border-radius: 20px;
  border: 1px solid #e36044;
  color: #e36044;
}
a.btn-primary i{
  color: #fff;
  font-size: 18px;
}
a.btn-primary{
  background-color: #e36044;
  color: #fff;
}
header{
  height: 55px;
  border-bottom: 1px solid #eee;
}
header img{
  height: 55px;
}
.nav{
  width: 80%;
}
.nav-left nav a:hover{
  color: #e36044;
}
.nav-left nav a{
  margin-right: 42px;
}
.nav-left nav{
  font-size: 18px;
  color: #333;
}


.search-wrap i{
  font-size: 18px;
  color: #666;
}
.search-wrap input{
  border: 0;
  padding: 0 10px 0 18px;
  width: calc(100% - 30px);
  background: transparent;
  box-sizing: border-box;
  color: #666;
  line-height: 40px;
}
.search-wrap{
  display: flex;
  align-items: center;
  width: 240px;
  overflow: hidden;
  background-color: #eeeeee;
  border-radius: 40px;
  height: 40px;
}
</style>