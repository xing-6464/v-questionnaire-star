import { getToken } from '@/utils/user-token'
import { message } from 'ant-design-vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://1.94.45.254:8080/',
  timeout: 10 * 1000,
  headers: {}
})

// request 拦截器 每次请求带上token
instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${getToken()}` // JWT 固定格式
    return config
  },
  (error) => Promise.reject(error)
)

// response 拦截器
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData

  if (errno !== 0) {
    if (msg) {
      message.error(msg)
    }

    throw new Error(msg || '请求失败')
  }

  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: any
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
