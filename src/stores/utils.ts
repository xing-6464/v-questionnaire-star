import { type ComponentInfoType } from './components'
export function getNextSelectedId(fe_id: string, componentList: ComponentInfoType[]) {
  const index = componentList.findIndex((c) => c.fe_id === fe_id)
  if (index < 0) return ''

  // 重新计算 selectedId
  let newSelectedId = ''
  const length = componentList.length
  if (length <= 1) {
    newSelectedId = ''
  } else {
    if (index + 1 === length) {
      // 删掉最后一个
      newSelectedId = componentList[index - 1].fe_id
    } else {
      // 正常移动
      newSelectedId = componentList[index + 1].fe_id
    }
  }

  return newSelectedId
}
