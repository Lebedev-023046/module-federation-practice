<template>
  <TaskModal :isOpen="isModalOpen" @close="onModalClose" />

  <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
    <h2 class="self-start text-2xl font-bold">Tasks</h2>
    <div class="flex flex-wrap justify-end gap-4 w-full lg:w-1/2 & > *:grow" id="controls">
      <Input v-model="serchQuery" placeholder="search" />
      <TaskFilter />
      <Button class="shrink" @click="onModalOpen">Add</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@shared/ui/button.vue'
import Input from '@shared/ui/input.vue'
import { computed, provide, ref } from 'vue'
import { isModalOpenKey, onModalCloseKey } from '../constants'
import TaskModal from '../modal/TaskModal.vue'
import { useTaskStore } from '../store'
import TaskFilter from './TaskFilter.vue'

const { filters, setSearchQuery } = useTaskStore()

const serchQuery = computed({
  get: () => filters.searchQuery,
  set: (value) => setSearchQuery(value),
})

let isModalOpen = ref(false)
const onModalOpen = () => (isModalOpen.value = true)
const onModalClose = () => (isModalOpen.value = false)

provide(isModalOpenKey, isModalOpen)
provide(onModalCloseKey, onModalClose)
</script>

<style lang="scss" scoped></style>
