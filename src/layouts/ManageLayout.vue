<template>
  <div class="container">
    <div class="left">
      <p>ManageLayout left</p>
      <button>创建问卷</button>
      <br />
      <a>我的问卷</a><br />
      <a>星标问卷</a><br />
      <a>回收站</a>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  padding: 24px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.left {
  width: 120px;
}

.right {
  flex: 1;
  margin-left: 60px;
}
</style>
