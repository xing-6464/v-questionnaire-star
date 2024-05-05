<template>
  <div class="container">
    <div>
      <ASpace>
        <ATypographyTitle :level="2"><UserAddOutlined /></ATypographyTitle>
        <ATypographyTitle :level="2">注册新用户</ATypographyTitle>
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
          <AInput v-model:value="formState.username" />
        </AFormItem>
        <AFormItem label="密码" name="password">
          <AInputPassword v-model:value="formState.password" />
        </AFormItem>
        <AFormItem label="确认密码" name="confirmPassword">
          <AInputPassword v-model:value="formState.confirmPassword" />
        </AFormItem>
        <AFormItem label="昵称" name="nickname">
          <AInput v-model:value="formState.nickname" />
        </AFormItem>
        <AFormItem :wrapper-col="{ offset: 6, span: 16 }">
          <ASpace>
            <AButton type="primary" html-type="submit"> 注册 </AButton>
            <RouterLink :to="LOGIN_PATHNAME">有账户，请登录</RouterLink>
          </ASpace>
        </AFormItem>
      </AForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { LOGIN_PATHNAME } from '@/router'
import type { Rule } from 'ant-design-vue/es/form'

interface FormState {
  username: string
  password: string
  confirmPassword: string
  nickname: string
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  confirmPassword: '',
  nickname: ''
})

const rules: Record<string, Rule[]> = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
  nickname: [{ required: true, message: '请输入昵称' }],
  confirmPassword: [
    { required: true, message: '请确认密码' },
    {
      validator: async (rule, value) => {
        if (!value || formState.password === value) {
          return Promise.resolve()
        } else {
          return Promise.reject(new Error('两次密码输入不一致'))
        }
      }
    }
  ]
}

function onFinish(values: FormState) {
  console.log(values)
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
