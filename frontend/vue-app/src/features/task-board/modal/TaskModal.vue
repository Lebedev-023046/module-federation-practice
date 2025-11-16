<template>
  <Modal
    :isOpen="isModalOpen"
    @close="onModalClose"
    title="Create task"
    description="Add new task to your list"
  >
    <TaskForm @submit="onSubmit" />
  </Modal>
</template>

<script setup lang="ts">
import type { CreateTaskPayload } from '@entities/task/model'
import Modal from '@shared/ui/modal.vue'
import { inject, ref } from 'vue'
import { isModalOpenKey, onModalCloseKey } from '../constants'
import TaskForm from '../form/TaskForm.vue'

const onSubmit = (formData: CreateTaskPayload) => {
  console.log({ formData })
  // createTask(formData) // TODO
  onModalClose?.()
}

const isModalOpen = inject(isModalOpenKey) ?? ref(false)
const onModalClose = inject(onModalCloseKey)
</script>

<style scoped></style>
