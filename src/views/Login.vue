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
import { RouterLink } from 'vue-router'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { onMounted, reactive } from 'vue'
import { REGISTER_PATHNAME } from '@/router'

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})

onMounted(() => {
  const { username, password } = getUserFromStorage()
  formState.username = username
  formState.password = password
})

function onFinish(values: FormState) {
  if (values.remember) {
    rememberUser(values.username, values.password)
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
