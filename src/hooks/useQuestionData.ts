import { getQuestionService } from '@/services/question'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

function useQuestionData() {
  const route = useRoute()
  const questionData = ref<any>({})
  const loading = ref(true)

  onMounted(async () => {
    const data = await getQuestionService(route.params.id as string)
    questionData.value = data
    loading.value = false
  })

  return { loading, questionData }
}

export default useQuestionData
