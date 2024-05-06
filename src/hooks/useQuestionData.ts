import useAjax from '@/services/ajax'
import type { AxiosResponse } from 'axios'
import { onMounted, ref, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

function useQuestionData() {
  const route = useRoute()
  const url = `/api/question/${route.params.id}`
  const { execute } = useAjax(url)
  const data = shallowRef<AxiosResponse<any, any>>()
  const loading = ref<boolean>()
  const error = ref<unknown>()

  onMounted(async () => {
    const { response, error: e, isLoading } = await execute({ method: 'GET' })
    data.value = response.value
    loading.value = isLoading.value
    error.value = e.value
  })

  return { data, error, loading }
}

export default useQuestionData
