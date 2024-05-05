import { message } from 'ant-design-vue'
import axios from 'axios'

const instance = axios.create({
  timeout: 10 * 1000
})

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
