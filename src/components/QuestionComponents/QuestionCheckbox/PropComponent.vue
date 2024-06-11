<template>
  <AForm layout="vertical" :model="formState" :disabled="disabled">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>

    <ASpace direction="vertical" :size="0">
      <template v-for="(option, index) in formState.list" :key="index">
        <AFormItem
          :label="index === 0 ? '选项' : ''"
          :name="['list', index, 'text']"
          :rules="optionRules"
        >
          <ASpace align="baseline">
            <AFormItemRest>
              <ACheckbox v-model:checked="option.checked" />
            </AFormItemRest>
            <AInput v-model:value="option.text" placeholder="请输入选项文字" />
            <MinusCircleOutlined v-if="index > 0" @click="remove(option)" />
          </ASpace>
        </AFormItem>
      </template>
    </ASpace>
    <AFormItem>
      <AButton type="link" @click="add" block>
        <PlusOutlined />
        添加选项
      </AButton>
    </AFormItem>

    <AFormItem name="isVertical">
      <ACheckbox v-model:checked="formState.isVertical">竖排显示</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { nanoid } from 'nanoid'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { type QuestionCheckboxPropsType } from './interface'
import type { RuleObject } from 'ant-design-vue/es/form'

const optionRules: RuleObject[] = [
  {
    required: true,
    message: '请输入选项文字'
  },
  {
    validator: (rule, value) => {
      let num = 0
      formState.list.forEach((item) => {
        if (item.text === value) {
          num++
        }
      })
      if (num > 1) {
        return Promise.reject('选项文字不能重复')
      }
      return Promise.resolve()
    }
  }
]

defineOptions({ name: 'QuestionCheckboxProp' })
const props = defineProps<QuestionCheckboxPropsType>()
const emits = defineEmits<{ change: [value: QuestionCheckboxPropsType] }>()

const formState = reactive({
  title: props.title || '',
  list: props.list || [],
  isVertical: props.isVertical || false
})

watch(formState, (value) => {
  emits('change', value)
})

function add() {
  formState.list.push({ text: '', value: nanoid(5), checked: false })
}

function remove(opt: { text: string; value: string; checked: boolean }) {
  const index = formState.list.indexOf(opt)
  if (index !== -1) {
    formState.list.splice(index, 1)
  }
}
</script>
