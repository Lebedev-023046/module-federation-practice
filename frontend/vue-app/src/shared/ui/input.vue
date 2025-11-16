<template>
  <div className="flex flex-col justify-center items-stretch flex-1 basis-10">
    <label v-if="label" :for="id">{{ label }}</label>

    <input
      v-model="searchQuery"
      class="border border-blue-200 outline-blue-200 rounded-md px-4 py-2 h-full"
      :id="id"
      v-bind="bindAttrs"
    />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@features/task-board/store'
import { computed, useAttrs, type InputHTMLAttributes } from 'vue'

interface InputProps {
  label?: string
}

const props = defineProps<InputProps>()
const attrs = useAttrs() as InputHTMLAttributes

const { filters, setSearchQuery } = useTaskStore()

const searchQuery = computed({
  get: () => filters.searchQuery,
  set: (value) => setSearchQuery(value),
})

const bindAttrs = computed(() => {
  return {
    ...attrs,
    ...props,
  }
})

const id = `input-${Math.random().toString(36).slice(2, 9)}`
</script>

<style scoped></style>
