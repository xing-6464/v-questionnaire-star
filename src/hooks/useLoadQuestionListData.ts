import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import { getQuestionListService } from '@/services/question'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'
type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar, isDeleted } = opt
  const route = useRoute()

  const { data, error, loading } = useRequest(
    async () => {
      const keyword = route.query[LIST_SEARCH_PARAM_KEY] || ''

      const data = await getQuestionListService({ keyword, isStar, isDeleted } as OptionType)
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
