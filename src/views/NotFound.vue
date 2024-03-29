<template>
  <div class="status-wrapper">
    <img src="@/assets/images/404.png" />
    <p>没有找到</p>
    <router-link to="/">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.status-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 550px;
  }

  p {
    margin: 24px 0;
  }
}
</style>
