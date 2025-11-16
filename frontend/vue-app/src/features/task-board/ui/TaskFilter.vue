<template>
  <select v-model="filters.status" class="border border-blue-200 rounded-md p-2 outline-0">
    <option v-for="option in options" :key="option.label" :value="option">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../store'

interface SelectProps {
  value: boolean | undefined
  label: string
}

const options: SelectProps[] = [
  { value: undefined, label: 'All tasks' },
  { value: true, label: 'Completed' },
  { value: false, label: 'In progress' },
]

const taskStore = useTaskStore()
const { filters } = storeToRefs(taskStore)
</script>

<style scoped></style>
