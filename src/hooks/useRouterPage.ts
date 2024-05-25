import { watch, type Ref } from 'vue'
import useGetUserInfo from './useGetUserInfo'
import { useRoute, useRouter } from 'vue-router'
import {
  LOGIN_PATHNAME,
  MANAGE_INDEX_PATHNAME,
  isLoginOrRegister,
  isNoNeedUserInfo
} from '@/router'

function useRouterPage(waitingUserInfoData: Ref<boolean>) {
  const { userInfo } = useGetUserInfo()
  const route = useRoute()
  const router = useRouter()

  watch(
    [userInfo, () => route.path, waitingUserInfoData],
    ([newInfo, newPath]) => {
      if (waitingUserInfoData.value) return
      // 已登录
      if (newInfo.username) {
        if (isLoginOrRegister(newPath)) {
          router.push(MANAGE_INDEX_PATHNAME)
        }
        return
      }

      // 未登录
      if (isNoNeedUserInfo(newPath)) {
        return
      } else {
        router.push(LOGIN_PATHNAME)
      }
    },
    { immediate: true }
  )
}

export default useRouterPage
