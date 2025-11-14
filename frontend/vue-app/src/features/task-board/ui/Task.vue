<template>
  <div :class="containerClasses">
    <div class="flex justify-between items-center gap-4">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <button>
        <TrashIcon className="text-2xl cursor-pointer" />
      </button>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-3 text-gray-600">
        <p class="font-bold">Priority:</p>
        <p class="font-bold">{{ priority }}</p>
      </div>
      <div>
        <button :class="buttonClasses">
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

const { id, title, completed, priority } = defineProps<Task>()

const color = getLightBgColor(priority)
const completedColor = completed ? 'bg-green-200' : 'bg-red-200'

const containerClasses = computed(() => {
  return [
    'flex flex-col justify-between  flex-1 basis-[200px] min-h-20 max-h-60 scroll-auto max-w-full  rounded-2xl p-4 ${color} md:max-w-1/2',
    color,
  ]
})

const buttonClasses = computed(() => {
  return ['inline-block rounded-md font-bold p-2 cursor-pointer', completedColor]
})

const payload = {
  completed: !completed,
}
</script>

<style scoped></style>
