import { defineStore } from 'pinia'
import { ref } from 'vue'

export type UserStateType = {
  username: string
  nickname: string
}

export const useUserInfo = defineStore('user', () => {
  const userInfo = ref<UserStateType>({
    username: '',
    nickname: ''
  })

  function login(info: UserStateType) {
    userInfo.value = info
  }

  function logout() {
    userInfo.value = {
      username: '',
      nickname: ''
    }
  }

  return {
    userInfo,
    login,
    logout
  }
})
