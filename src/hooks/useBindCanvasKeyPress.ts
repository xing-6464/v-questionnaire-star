import { onMounted, onUnmounted } from 'vue'
import useGetComponentInfo from './useGetComponentInfo'
import { onKeyStroke } from '@vueuse/core'

function isActiveElementValid() {
  const activeElement = document.activeElement

  if (activeElement === document.body) return true // 光标没有 focus 到 input

  return false
}

function useBindCanvasKeyPress() {
  const { removeSelectedComponent, copySelectedComponent, pasteCopiedComponent } =
    useGetComponentInfo()

  onKeyStroke(
    ['Delete', 'Backspace'],
    () => {
      if (!isActiveElementValid()) return
      removeSelectedComponent()
    },
    {
      target: document
    }
  )

  const onKeyPress = (e: KeyboardEvent) => {
    if (!isActiveElementValid()) return
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      copySelectedComponent()
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
      pasteCopiedComponent()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeyPress)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeyPress)
  })
}

export default useBindCanvasKeyPress
