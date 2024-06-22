<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="left">
        <ASpace>
          <AButton type="link" :icon="h(LeftOutlined)" @click="$router.back()">返回</AButton>
          <ATypographyTitle>{{ pageInfo.title }}</ATypographyTitle>
        </ASpace>
      </div>
      <div class="main">
        <template v-if="pageInfo.isPublished">
          <ASpace>
            <AInput ref="urlInputRef" :value="url" style="width: 300px" />
            <ATooltip content="复制链接">
              <AButton :icon="h(CopyOutlined)" @click="copy" />
            </ATooltip>
            <APopover>
              <template #content>
                <a-qrcode :value="url" :size="150" />
              </template>
              <AButton :icon="h(QrcodeOutlined)" />
            </APopover>
          </ASpace>
        </template>
      </div>
      <div class="right">
        <AButton type="primary" @click="() => $router.push(`/question/edit/${$route.params.id}`)">
          编辑问卷
        </AButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useRoute } from 'vue-router'
import { LeftOutlined, CopyOutlined, QrcodeOutlined } from '@ant-design/icons-vue'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import type { InputRef } from 'ant-design-vue/es/vc-input/inputProps'

const { pageInfo } = useGetPageInfo()
const route = useRoute()

const url = computed(() => `http://question.ixing.xyz/question/${route.params.id}`)

const urlInputRef = ref<InputRef | null>(null)
function copy() {
  const el = urlInputRef.value
  if (el == null) return
  el.select()
  document.execCommand('copy')
  message.success('链接已复制')
}
</script>

<style scoped lang="scss">
.header-wrapper {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 0;
}

.header {
  display: flex;
  margin: 0 24px;

  .left {
    flex: 1;

    h1 {
      font-size: 18px;
      margin-bottom: 0;
      line-height: 1;
    }
  }

  .right {
    flex: 1;
    text-align: right;
  }

  .main {
    flex: 1;
    text-align: center;
  }
}
</style>
