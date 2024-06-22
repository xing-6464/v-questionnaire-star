<template>
  <div class="container">
    <div>
      <ASpace>
        <ATypographyTitle :level="2"><UserAddOutlined /></ATypographyTitle>
        <ATypographyTitle :level="2">用户登录</ATypographyTitle>
      </ASpace>
    </div>
    <div>
      <AForm
        :model="formState"
        :rules="rules"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        @finish="onFinish"
      >
        <AFormItem label="用户名" name="username">
          <AInput v-model:value="formState.username" placeholder="请输入用户名" />
        </AFormItem>
        <AFormItem label="密码" name="password">
          <AInputPassword v-model:value="formState.password" placeholder="请输入密码" />
        </AFormItem>
        <AFormItem name="remember" :wrapper-col="{ span: 16, offset: 6 }">
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        </AFormItem>
        <AFormItem :wrapper-col="{ span: 16, offset: 6 }">
          <ASpace>
            <AButton type="primary" html-type="submit">登录</AButton>
            <RouterLink :to="REGISTER_PATHNAME">注册新用户</RouterLink>
          </ASpace>
        </AFormItem>
      </AForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { onMounted, reactive } from 'vue'
import { MANAGE_INDEX_PATHNAME, REGISTER_PATHNAME } from '@/router'
import type { Rule } from 'ant-design-vue/es/form'
import { useRequest } from 'vue-request'
import { loginService } from '@/services/user'
import { message } from 'ant-design-vue'
import { setToken } from '@/utils/user-token'

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

interface FormState {
  username: string
  password: string
  remember: boolean
}
const rules: Record<string, Rule[]> = {
  username: [
    { required: true, message: '请输入用户名' },
    { type: 'string', min: 5, max: 20, message: '长度在5-20个字符之间' },
    { pattern: /^\w+$/, message: '只能字母、数字和下划线' }
  ],
  password: [{ required: true, message: '请输入密码' }]
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})

const router = useRouter()

const { run } = useRequest(
  async (username: string, password: string) => {
    const data = await loginService(username, password)
    return data
  },
  {
    manual: true,
    onSuccess(res) {
      const { token } = res
      // 存储 token
      setToken(token)
      message.success('登录成功')
      router.push('/')
    },
    onError(err) {
      message.error('登录失败，请检查用户名和密码')
    }
  }
)

onMounted(() => {
  const { username, password } = getUserFromStorage()
  formState.username = username
  formState.password = password
})

function onFinish(values: FormState) {
  const { username, password, remember } = values

  run(username, password)

  if (remember) {
    rememberUser(username, password)
  } else {
    deleteUserFromStorage()
  }
}

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getUserFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY) || '',
    password: localStorage.getItem(PASSWORD_KEY) || ''
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px - 65px);
  background-color: #fff;
}
</style>
