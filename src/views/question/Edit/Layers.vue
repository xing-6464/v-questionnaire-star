<template>
  <div v-for="c in componentList" :key="c.fe_id" class="wrapper">
    <div
      class="title"
      :class="{ selected: c.fe_id === selectedId }"
      @click="handleTitleClick(c.fe_id)"
    >
      {{ c.title }}
    </div>
    <div class="handle">按钮</div>
  </div>
</template>

<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { message } from 'ant-design-vue'

const { componentList, selectedId, changeSelectedId } = useGetComponentInfo()

// 点击选中组件
function handleTitleClick(fe_id: string) {
  const curComp = componentList.value?.find((c) => c.fe_id === fe_id)
  if (curComp && curComp.isHidden) {
    message.info('该组件已隐藏，请先取消隐藏')
    return
  }
  if (fe_id !== selectedId.value) {
    // 切换选中组件
    changeSelectedId(fe_id)
    return
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  .title {
    flex: auto;
    line-height: 2;
  }

  .selected {
    color: #1890ff;
  }

  .handle {
    width: 50px;
    text-align: end;

    .btn {
      opacity: 0.2;
    }
  }

  &:hover {
    .handle {
      .btn {
        opacity: 1;
      }
    }
  }
}
</style>
