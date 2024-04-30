<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <router-link :to="isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`">
          <el-space>
            <el-icon v-if="isStar">
              <Star />
            </el-icon>
            {{ title }}
          </el-space>
        </router-link>
      </div>
      <div class="right">
        <el-space size="default">
          <el-tag v-if="isPublished" type="primary">已发布</el-tag>
          <el-tag v-else type="info" effect="plain">未发布</el-tag>
          <span>答卷：{{ answerCount }}</span>
          <span>{{ createdAt }}</span>
        </el-space>
      </div>
    </div>
    <el-divider :style="{ margin: '12px 0' }" />
    <div class="button-container">
      <div class="left">
        <el-button
          :icon="Edit"
          text
          size="small"
          @click="() => router.push(`/question/edit/${_id}`)"
        >
          编辑问卷
        </el-button>
        <el-button
          :icon="DataLine"
          size="small"
          text
          @click="() => router.push(`/question/stat/${_id}`)"
        >
          数据统计
        </el-button>
      </div>
      <div class="right">
        <el-button :icon="Star" text size="small">
          {{ isStar ? '取消标星' : '标星' }}
        </el-button>
        <el-button :icon="CopyDocument" text size="small">复杂</el-button>
        <el-button :icon="Delete" text size="small">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Edit, DataLine, Star, CopyDocument, Delete } from '@element-plus/icons-vue'

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}
const props = defineProps<PropsType>()
const router = useRouter()
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
