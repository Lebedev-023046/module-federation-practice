<template>
  <div class="flex flex-wrap gap-4">
    <Task v-for="task in mockedTasks" v-bind="task" :key="task.id" />
  </div>
</template>

<script setup>
import { mockedTasks } from '@shared/mocks/tasks'
import Task from './Task.vue'
</script>
