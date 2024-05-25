import { ref, watch } from 'vue'
import { useRequest } from 'vue-request'
import { getUserInfoService } from '@/services/user'
import { useUserInfo } from '@/stores/user'

function useLoadUserData() {
  const waitingUserData = ref(true)
  const store = useUserInfo()

  // ajax 加载用户信息
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(data) {
      const { username, nickname } = data
      store.login({ username, nickname })
    },
    onAfter() {
      waitingUserData.value = false
    }
  })

  watch(
    () => store.userInfo,
    (newUserInfo) => {
      if (newUserInfo.username) {
        waitingUserData.value = false
        return
      }
      run()
    },
    { immediate: true }
  )

  return {
    waitingUserData
  }
}

export default useLoadUserData
