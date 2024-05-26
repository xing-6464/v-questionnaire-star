import type { Component } from 'vue'
import QuestionInputConf, { type QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { type QuestionTitlePropsType } from './QuestionTitle'

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: Component<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部组件配置列表
const componentConfList: ComponentConfType[] = [QuestionInputConf, QuestionTitleConf]

export function getComponentConf(type: string) {
  return componentConfList.find((c) => c.type === type)
}
