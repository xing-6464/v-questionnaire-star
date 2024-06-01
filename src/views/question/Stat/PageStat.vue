<template>
  <div>
    <ATypographyTitle :level="3">答卷数量：{{ !loading ? total : '' }}</ATypographyTitle>
    <Loading v-if="loading" />
    <template v-else>
      <ATable
        :data-source="list"
        :row-key="(i) => i._id"
        :columns="
          componentList?.map((c) => {
            return {
              title: c.props.title || c.title,
              dataIndex: c.fe_id,
              type: c.type
            }
          })
        "
      >
        <template #headerCell="{ title, column }">
          <div
            style="cursor: pointer"
            @click="
              () => {
                if (column.dataIndex == null) return
                $emit('changeSelectedComponentId', column.dataIndex as string)
                $emit('changeSelectedComponentType', (column as unknown as any).type)
              }
            "
          >
            <span
              :style="{ color: column.dataIndex === selectedComponentId ? '#1890ff' : 'inherit' }"
            >
              {{ title }}
            </span>
          </div>
        </template>
      </ATable>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import Loading from '@/components/Loading.vue'
import { getQuestionStatListService } from '@/services/stat'
import type { PropsType, EmitsType } from './types'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

defineProps<PropsType>()
defineEmits<EmitsType>()

const route = useRoute()
const total = ref(0)
const list = ref([])

const { componentList } = useGetComponentInfo()
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
