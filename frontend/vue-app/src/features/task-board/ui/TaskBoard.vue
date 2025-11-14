<script setup>
import TaskBoardBody from './TaskBoardBody.vue'
import TaskBoardHeader from './TaskBoardHeader.vue'
</script>

<template>
  <section className="flex flex-col gap-4 px-6 py-4">
    <TaskBoardHeader />
    <TaskBoardBody />
  </section>
</template>
