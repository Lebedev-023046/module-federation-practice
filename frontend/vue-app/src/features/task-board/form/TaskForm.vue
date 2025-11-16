<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mt-4 mb-4">
    <input
      v-model="title"
      placeholder="title"
      class="border rounded-md p-2"
      name="title"
      type="text"
    />
    <input
      v-model="description"
      placeholder="description"
      class="border rounded-md p-2"
      name="description"
      type="text"
    />
    <input
      v-model="priority"
      placeholder="priority"
      class="border rounded-md p-2"
      name="priority"
      type="text"
    />
    <button
      class="bg-blue-200 p-2 rounded-md active:bg-blue-400 hover:bg-blue-300 transition-colors duration-200"
      type="submit"
    >
      Добавить
    </button>
  </form>
</template>

<script setup lang="ts">
import type { CreateTaskPayload } from '@entities/task/model'
import { ref } from 'vue'

interface TaskFormProps {
  initialData?: Partial<CreateTaskPayload>
}

const { initialData } = defineProps<TaskFormProps>()
const emit = defineEmits<{
  submit: [formData: CreateTaskPayload]
}>()

const title = ref(initialData?.title || '')
const description = ref(initialData?.description || '')
const priority = ref(initialData?.priority || 0)

const handleSubmit = () => {
  if (!title.value.trim()) return

  const payload: CreateTaskPayload = {
    title: title.value,
    description: description.value,
    priority: Number(priority.value),
    completed: false,
  }
  emit('submit', payload)
}
</script>

<style scoped></style>
