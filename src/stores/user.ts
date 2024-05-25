import { defineStore } from 'pinia'
import { reactive } from 'vue'

export type UserStateType = {
  username: string
  nickname: string
}

export const useUserInfo = defineStore('user', () => {
  const userInfo = reactive<UserStateType>({
    username: '',
    nickname: ''
  })

  function login(info: UserStateType) {
    userInfo.username = info.username
    userInfo.nickname = info.nickname
  }

  function logout() {
    userInfo.username = ''
    userInfo.nickname = ''
  }

  return {
    userInfo,
    login,
    logout
  }
})
