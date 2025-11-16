<template>
  <TaskModal :isOpen="isModalOpen" @close="onModalClose" />

  <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
    <h2 className="self-start text-2xl font-bold">Tasks</h2>
    <div className="flex flex-wrap justify-end gap-4 w-full lg:w-1/2 & > *:grow" id="controls">
      <Input placeholder="search" />
      <TaskFilter />
      <Button className="shrink" @click="onModalOpen">Add</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@shared/ui/button.vue'
import Input from '@shared/ui/input.vue'
import { provide, ref } from 'vue'
import { isModalOpenKey, onModalCloseKey } from '../constants'
import TaskModal from '../modal/TaskModal.vue'
import TaskFilter from './TaskFilter.vue'

let isModalOpen = ref(false)
const onModalOpen = () => (isModalOpen.value = true)
const onModalClose = () => (isModalOpen.value = false)

provide(isModalOpenKey, isModalOpen)
provide(onModalCloseKey, onModalClose)
</script>

<style lang="scss" scoped></style>
