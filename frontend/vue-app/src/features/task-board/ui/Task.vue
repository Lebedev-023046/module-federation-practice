<template>
  <div :class="containerClasses">
    <div class="flex justify-between items-center gap-4">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <button class="shrink-0 h-6 w-6 mt-1 self-baseline cursor-pointer" @click="handleDeleteTask">
        <TrashIcon className="text-2xl cursor-pointer" />
      </button>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-3 text-gray-600">
        <p class="font-bold">Priority:</p>
        <p class="font-bold">{{ priority }}</p>
      </div>
      <div>
        <button @click="handleUpdateTask" :class="buttonClasses">
          {{ completed ? 'Completed' : 'Not completed' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@entities/task/model'
import { TrashIcon } from '@heroicons/vue/16/solid'
import { getLightBgColor } from '@shared/helpers/getRandomBgColor'
import { computed } from 'vue'
import { useDeleteTask } from '../composables/useDeleteTask'
import { useUpdateTask } from '../composables/useUpdateTask'

const { id, title, completed, priority } = defineProps<Task>()

const color = getLightBgColor(priority)

const completedColor = computed(() => {
  return completed ? 'bg-green-200' : 'bg-red-200'
})

const containerClasses = computed(() => {
  return [
    'flex flex-col justify-between  flex-1 basis-[200px] min-h-20 max-h-60 scroll-auto max-w-full  rounded-2xl p-4 ${color} md:max-w-1/2',
    color,
  ]
})

const buttonClasses = computed(() => {
  return ['inline-block rounded-md font-bold p-2 cursor-pointer', completedColor.value]
})

const { mutate: updateTask } = useUpdateTask()
const { mutate: deleteTask } = useDeleteTask()

const updatePayload = computed(() => {
  return {
    completed: !completed,
  }
})

const handleUpdateTask = () => {
  if (!id) return
  updateTask({ id, payload: updatePayload.value })
}
const handleDeleteTask = () => {
  if (!id) return
  deleteTask(id)
}
</script>

<style scoped></style>
