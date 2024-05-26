<template>
  <div class="container">
    <div style="background-color: #fff; height: 40px">Header</div>
    <div class="content-wrapper">
      <div class="content">
        <div class="left">
          <LeftPanel />
        </div>
        <div class="main" @click="handleSelectedId">
          <div class="canvas-wrapper">
            <EditCanvas :loading="loading" />
          </div>
        </div>
        <div class="right">
          <RightPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import EditCanvas from './EditCanvas.vue'
import LeftPanel from './LeftPanel.vue'
import RightPanel from './RightPanel.vue'

const { loading } = useLoadQuestionData()
const { changeSelectedId } = useGetComponentInfo()

function handleSelectedId() {
  changeSelectedId('')
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;

  .content-wrapper {
    flex: auto;
    padding: 12px 0;

    .content {
      margin: 0 24px;
      display: flex;
      height: 100%;

      .left {
        width: 285px;
        background-color: #fff;
        padding: 0 12px;
      }

      .main {
        flex: 1;
        position: relative;

        .canvas-wrapper {
          position: absolute;
          width: 400px;
          height: 712px;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          background-color: #fff;
          overflow: auto;
          box-shadow: 0 2px 10px #0000001f;
        }
      }

      .right {
        width: 300px;
        background-color: #fff;
        padding: 0 12px;
      }
    }
  }
}
</style>
