<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <router-link :to="isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`">
          <a-space>
            <StarOutlined v-if="isStar" style="color: red" />
            {{ title }}
          </a-space>
        </router-link>
      </div>
      <div class="right">
        <a-space>
          <a-tag v-if="isPublished" color="processing">已发布</a-tag>
          <a-tag v-else>未发布</a-tag>
          <span>答卷：{{ answerCount }}</span>
          <span>{{ createdAt }}</span>
        </a-space>
      </div>
    </div>
    <a-divider :style="{ margin: '12px 0' }" />
    <div class="button-container">
      <div class="left">
        <a-space>
          <a-button
            :icon="h(EditOutlined)"
            type="text"
            size="small"
            @click="() => router.push(`/question/edit/${_id}`)"
          >
            编辑问卷
          </a-button>
          <a-button
            :icon="h(LineChartOutlined)"
            size="small"
            type="text"
            @click="() => router.push(`/question/stat/${_id}`)"
          >
            数据统计
          </a-button>
        </a-space>
      </div>
      <div class="right">
        <a-space>
          <a-button :icon="h(StarOutlined)" type="text" size="small">
            {{ isStar ? '取消标星' : '标星' }}
          </a-button>
          <a-popconfirm
            title="确定复制该问卷？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="duplicate"
          >
            <a-button :icon="h(CopyOutlined)" type="text" size="small">复制</a-button>
          </a-popconfirm>
          <a-button :icon="h(DeleteOutlined)" type="text" size="small" @click="del">删除</a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useRouter } from 'vue-router'
import { message, Modal } from 'ant-design-vue'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  StarOutlined
} from '@ant-design/icons-vue'

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}
defineProps<PropsType>()
const router = useRouter()

function duplicate() {
  message.success('复制成功')
}

function del() {
  Modal.confirm({
    title: '确定删除问卷',
    okText: '确定',
    cancelText: '取消',
    icon: h(ExclamationCircleOutlined),
    onOk: () => message.success('删除成功')
  })
}
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
    font-size: 14px;
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

    button:hover {
      color: #000;
    }
  }
}
</style>
