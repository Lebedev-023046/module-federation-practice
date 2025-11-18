<template>
  <Teleport to="#modal-root">
    <div v-if="isOpen">
      <div class="fixed z-10 top-0 left-0 w-full h-full bg-black/50"></div>
      <div
        class="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 flex flex-col gap-4 p-6 rounded-lg max-w-1/2 min-w-1/3"
      >
        <XMarkIcon
          @click="emit('close')"
          class="absolute w-8 h-8 top-4 right-4 ml-auto cursor-pointer"
        />
        <div class="flex flex-col gap-2 items-center">
          <div class="text-2xl font-bold">
            <h2 v-if="title">{{ title }}</h2>
          </div>
          <div class="text-xl font-medium">
            <h3 v-if="description">{{ description }}</h3>
          </div>
        </div>
        <div class="justify-center items-center">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/16/solid'

interface Props {
  title: string
  description: string
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}
const { title, description, isOpen } = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped></style>
