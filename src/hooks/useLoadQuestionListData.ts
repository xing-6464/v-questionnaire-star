import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import { getQuestionListService } from '@/services/question'
import { LIST_PAGE_SIZE_PARAM_KEY, LIST_SEARCH_PARAM_KEY, PAGE_SIZE } from '@/constant'
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
      const page = parseInt((route.query[LIST_SEARCH_PARAM_KEY] || '') as string) || 1
      const pageSize =
        parseInt((route.query[LIST_PAGE_SIZE_PARAM_KEY] || '') as string) || PAGE_SIZE

      const data = await getQuestionListService({
        keyword,
        isStar,
        isDeleted,
        page,
        pageSize
      } as OptionType)
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
