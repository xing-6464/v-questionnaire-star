<template>
  <div class="common-layout">
    <el-header class="header">
      <div class="left">Logo</div>
      <div class="right">登录</div>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer">小星问卷 &copy; 2024 - present. Created by 星</el-footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  padding: 0 24px;
  height: 64px;

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}

.main {
  min-height: calc(100vh - 64px - 65px);
}

.footer {
  text-align: center;
  height: 65px;
  line-height: 65px;
  background-color: #f7f7f7;
  border-top: 1px solid #e8e8e8;
}
</style>
