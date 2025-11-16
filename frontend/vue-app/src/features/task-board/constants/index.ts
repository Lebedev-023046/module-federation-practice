import type { InjectionKey, Ref } from 'vue'

export const isModalOpenKey = Symbol('isModalOpen') as InjectionKey<Ref<boolean>>
export const onModalCloseKey = Symbol('onModalClose') as InjectionKey<() => void>
