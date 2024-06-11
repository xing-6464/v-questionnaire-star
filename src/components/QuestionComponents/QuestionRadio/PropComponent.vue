<template>
  <AForm :model="formState" layout="vertical" :disabled="disabled">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>

    <ASpace direction="vertical" :size="0">
      <AFormItem
        v-for="(option, index) in formState.options"
        :key="index"
        :label="index === 0 ? '选项' : ''"
        :name="['options', index, 'text']"
        :rules="optionRules"
      >
        <ASpace>
          <AInput v-model:value="option.text" placeholder="请输入选项文字" />
          <MinusCircleOutlined v-if="index > 1" @click="remove(option)" />
        </ASpace>
      </AFormItem>
    </ASpace>
    <AFormItem>
      <AButton type="link" @click="add" block>
        <PlusOutlined />
        添加选项
      </AButton>
    </AFormItem>

    <AFormItem label="默认选中" name="value">
      <ASelect v-model:value="formState.value">
        <ASelectOption
          v-for="{ value: _value, text } in formState.options"
          :key="_value"
          :value="_value"
        >
          {{ text }}
        </ASelectOption>
      </ASelect>
    </AFormItem>

    <AFormItem label="是否垂直显示" name="isVertical">
      <ACheckbox v-model:checked="formState.isVertical">垂直显示</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import type { QuestionRadioPropsType } from './interface'
import { nanoid } from 'nanoid'
import type { RuleObject } from 'ant-design-vue/es/form'

const optionRules: RuleObject[] = [
  {
    required: true,
    message: '请输入选项文字'
  },
  {
    validator: (rule, value) => {
      let num = 0
      formState.options.forEach((item) => {
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

defineOptions({ name: 'QuestionRadioProp' })

const props = defineProps<QuestionRadioPropsType>()
const emits = defineEmits<{ change: [value: QuestionRadioPropsType] }>()

const formState = reactive({
  title: props.title || '',
  isVertical: props.isVertical || false,
  options: props.options || [],
  value: props.value || ''
})

watch(formState, (newValue) => {
  emits('change', newValue)
})

function add() {
  formState.options.push({ text: '', value: nanoid(5) })
}

function remove(opt: { text: string; value: string }) {
  const index = formState.options.indexOf(opt)
  if (index !== -1) {
    formState.options.splice(index, 1)
  }
}
</script>
