<template>
  <a-tabs default-active-key="componentLib">
    <a-tab-pane key="componentLib">
      <template #tab>
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      </template>
      <ComponentLib />
    </a-tab-pane>
    <a-tab-pane key="layers">
      <template #tab>
        <span>
          <BarsOutlined />
          图层
        </span>
      </template>
      <Layers />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons-vue'
import ComponentLib from './ComponentLib.vue'
import Layers from './Layers.vue'
</script>
