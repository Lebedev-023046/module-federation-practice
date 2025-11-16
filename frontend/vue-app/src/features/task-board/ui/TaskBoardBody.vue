<template>
  <div class="flex flex-wrap gap-4">
    <Task v-if="data" v-for="task in data" v-bind="task" :key="task.id" />
    <div v-else-if="error">Something went wrong</div>
    <div v-else-if="isLoading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { tasksApi } from '@entities/task/api'
import { useQuery } from '@tanstack/vue-query'
import debounce from 'debounce'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useTaskStore } from '../store'
import Task from './Task.vue'

const taskStore = useTaskStore()
const { filters } = storeToRefs(taskStore)

const baseParams = computed(() => ({
  search: filters.value.searchQuery,
  status: filters.value.status.value,
}))

const debouncedSearch = ref(filters.value.searchQuery)

const applyDebounce = debounce((val) => {
  debouncedSearch.value = val
}, 500)

watch(
  () => filters.value.searchQuery,
  (val) => applyDebounce(val),
)

const queryParams = computed(() => ({
  search: debouncedSearch.value,
  status: baseParams.value.status,
}))

const { data, error, isLoading } = useQuery({
  ...tasksApi.getAllTasksQueryOptions(queryParams),
})
</script>
