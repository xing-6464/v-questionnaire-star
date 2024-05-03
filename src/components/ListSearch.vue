<template>
  <a-input-search
    placeholder="输入关键字搜索"
    v-model:value="value"
    size="large"
    @Search="handleSearch"
    allow-clear
    style="width: 260px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
function handleSearch(searchVal: string) {
  console.log(searchVal)
}
</script>

<style scoped lang="scss"></style>
