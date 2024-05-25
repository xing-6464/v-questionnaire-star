import { useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import { getQuestionService } from '@/services/question'

function useLoadQuestionData() {
  const route = useRoute()
  const { loading, data, error } = useRequest(async () => {
    const data = await getQuestionService(route.params.id as string)
    return data
  })

  return {
    loading,
    data,
    error
  }
}

export default useLoadQuestionData
