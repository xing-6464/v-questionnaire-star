<template>
  <div>
    <ATypographyTitle :level="3">答卷数量：{{ !loading && total }}</ATypographyTitle>
    <Loading v-if="loading" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import Loading from '@/components/Loading.vue'
import { getQuestionStatListService } from '@/services/stat'
import type { PropsType, EmitsType } from './types'

defineProps<PropsType>()
defineEmits<EmitsType>()

const route = useRoute()
const total = ref(0)
const list = ref([])

const { loading } = useRequest(
  async () => {
    const data = await getQuestionStatListService(route.params.id as string, {
      page: 1,
      pageSize: 10
    })
    return data
  },
  {
    onSuccess: (data) => {
      const { total: _total, list: _list = [] } = data
      total.value = _total
      list.value = _list
    }
  }
)
</script>
