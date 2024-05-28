<template>
  <div v-for="c in componentList" :key="c.fe_id" class="wrapper">
    <div
      class="title"
      :class="{ selected: c.fe_id === selectedId }"
      @click="handleTitleClick(c.fe_id)"
    >
      <AInput
        v-if="c.fe_id === changeTitleId"
        v-model:value="c.title"
        @change="changeTitle"
        @press-enter="changeTitleId = ''"
        @blur="changeTitleId = ''"
      />
      <template v-else>
        {{ c.title }}
      </template>
    </div>
    <div class="handle">按钮</div>
  </div>
</template>

<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { message } from 'ant-design-vue'
import type { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface'
import { ref } from 'vue'

// 记录当前正在修改标题的组件id
const changeTitleId = ref('')

const { componentList, selectedId, changeSelectedId, changeComponentTitle } = useGetComponentInfo()

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
    changeTitleId.value = ''
    return
  }

  // 开始修改标题
  changeTitleId.value = fe_id
}

// 修改标题
function changeTitle(e: ChangeEvent) {
  const newTitle = e.target.value?.trim()
  const selectedIdVal = selectedId.value
  if (!newTitle) return
  if (!selectedIdVal) return
  changeComponentTitle({ fe_id: selectedIdVal, title: newTitle })
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
