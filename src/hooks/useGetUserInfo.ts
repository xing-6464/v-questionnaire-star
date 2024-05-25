import { useUserInfo } from '@/stores/user'
import { storeToRefs } from 'pinia'

function useGetUserInfo() {
  const store = useUserInfo()
  const { userInfo } = storeToRefs(store)
  const { login, logout } = store

  return {
    userInfo,
    login,
    logout
  }
}

export default useGetUserInfo
