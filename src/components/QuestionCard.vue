<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <a href="#">{{ props.data.title }}</a>
      </div>
      <div class="right">
        <span v-if="props.data.isPublished" :style="{ color: 'green' }">已发布</span>
        <span v-else>未发布</span>
        &nbsp;
        <span>答卷：{{ props.data.answerCount }}</span>
        &nbsp;
        <span>{{ props.data.createdAt }}</span>
      </div>
    </div>
    <div class="button-container">
      <div class="left">
        <button>编辑问卷</button>
        <button>数据统计</button>
      </div>
      <div class="right">
        <button>标星</button>
        <button>复杂</button>
        <button>删除</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type PropsType = {
  data: {
    _id: string
    title: string
    isStar: boolean
    isPublished: boolean
    answerCount: number
    createdAt: string
  }
}

const props = defineProps<PropsType>()
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 3px;
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 10px #e8e8e8;
  }
}

.title {
  display: flex;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    text-align: right;
    font-size: 12px;
  }
}

.button-container {
  display: flex;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    text-align: right;

    button {
      color: #999;
    }
  }
}
</style>
