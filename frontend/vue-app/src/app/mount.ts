import TaskBoard from '@features/task-board/ui/TaskBoard.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp, type App as VueApp } from 'vue'

let app: VueApp | null = null
let mountedContainer: HTMLElement | null = null

function mount(container: HTMLElement): VueApp | undefined {
  if (app) return

  mountedContainer = container

  const instance = createApp(TaskBoard)
  instance.use(createPinia())
  instance.use(VueQueryPlugin)

  instance.mount(container)
  app = instance
}

function unmount() {
  if (!app) return

  const instance = app
  const container = mountedContainer

  app = null
  mountedContainer = null

  if (!container || !container.isConnected) {
    return
  }

  try {
    instance.unmount()
  } catch (e) {
    console.warn('[vue_app] error during Vue app unmount:', e)
  }
}

export default { mount, unmount }
