import { useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import { getQuestionService } from '@/services/question'
import { watch } from 'vue'
import { useComponentsStore } from '@/stores/components'
import { usePageInfoStore } from '@/stores/pageInfo'

function useLoadQuestionData() {
  const route = useRoute()

  const store = useComponentsStore()
  const pageInfo = usePageInfoStore()

  // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('问卷没有 id')

      const data = await getQuestionService(route.params.id as string)
      return data
    },
    {
      manual: true
    }
  )

  // 判断 id变化，执行ajax加载问卷数据
  watch(
    () => route.params.id,
    (newID) => {
      run(newID as string)
    },
    {
      immediate: true
    }
  )

  // 监听 data 变化，把 componentList 存入 store
  watch(
    data,
    (newData) => {
      if (!newData) return
      const { title = '', desc = '', js = '', css = '', componentList = [] } = newData

      // 获取默认 selectedId
      let selectedId = ''
      if (componentList.length > 0) {
        selectedId = componentList[0].fe_id // 默认选中第一个 component
      }

      // 把componentList 存入 store
      store.resetComponents({ componentList, selectedId, copiedComponent: null })

      // 把 pageInfo 存入 store
      pageInfo.resetPageInfo({ title, desc, js, css })
    },
    {
      immediate: true
    }
  )

  return {
    loading,
    error
  }
}

export default useLoadQuestionData
