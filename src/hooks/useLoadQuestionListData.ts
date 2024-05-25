import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import { getQuestionListService } from '@/services/question'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

function useLoadQuestionListData() {
  const route = useRoute()

  const { data, error, loading } = useRequest(
    async () => {
      const keyword = route.query[LIST_SEARCH_PARAM_KEY] || ''

      const data = await getQuestionListService({ keyword } as { keyword: string })
      return data
    },
    {
      refreshDeps: [() => route.query]
    }
  )

  return {
    data,
    error,
    loading
  }
}

export default useLoadQuestionListData
