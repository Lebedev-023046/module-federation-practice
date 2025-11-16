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
import { useCreateTask } from '../composables/useCreateTask'
import { isModalOpenKey, onModalCloseKey } from '../constants'
import TaskForm from '../form/TaskForm.vue'

const { mutate: createTask } = useCreateTask()

const onSubmit = (formData: CreateTaskPayload) => {
  createTask(formData)
  onModalClose?.()
}

const isModalOpen = inject(isModalOpenKey) ?? ref(false)
const onModalClose = inject(onModalCloseKey)
</script>

<style scoped></style>
