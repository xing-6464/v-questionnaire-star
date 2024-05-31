export type PropsType = {
  selectedComponentId: string
  selectedComponentType: string
}

export type EmitsType = {
  changeSelectedComponentId: [id: string]
  changeSelectedComponentType: [type: string]
}
