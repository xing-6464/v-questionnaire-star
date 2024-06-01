<template>
  <div>
    <ATypographyTitle :level="3">答卷数量：{{ !loading ? total : '' }}</ATypographyTitle>
    <Loading v-if="loading" />
    <template v-else>
      <ATable
        :data-source="list"
        :row-key="(i) => i._id"
        :pagination="false"
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
      <div style="text-align: center; margin-top: 18px">
        <APagination
          :current="page"
          :total="total"
          :page-size="pageSize"
          @change="changePage"
          @show-size-change="changePageSize"
        />
      </div>
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
import { STAT_PAGE_SIZE } from '@/constant'

defineProps<PropsType>()
defineEmits<EmitsType>()

const route = useRoute()
const total = ref(0)
const list = ref([])
const page = ref(1)
const pageSize = ref(STAT_PAGE_SIZE)

const { componentList } = useGetComponentInfo()
const { loading } = useRequest(
  async () => {
    const data = await getQuestionStatListService(route.params.id as string, {
      page: page.value,
      pageSize: pageSize.value
    })
    return data
  },
  {
    refreshDeps: [() => route.params.id, page, pageSize],
    onSuccess: (data) => {
      const { total: _total, list: _list = [] } = data
      total.value = _total
      list.value = _list
    }
  }
)

function changePage(p: number) {
  page.value = p
}

function changePageSize(p: number, ps: number) {
  page.value = p
  pageSize.value = ps
}
</script>
