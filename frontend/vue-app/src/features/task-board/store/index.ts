import type { Task } from '@entities/task/model'
import { defineStore } from 'pinia'

type StatusValue = boolean | undefined
type StatusLabel = 'All tasks' | 'Completed' | 'In progress'

export type SearchQuery = string
export type FilterStatus = {
  value: StatusValue
  label: StatusLabel
}

interface TaskState {
  taskItems: Task[]
  filters: {
    searchQuery: SearchQuery
    status: FilterStatus
  }
}

export const useTaskStore = defineStore('tasksStore', {
  state: (): TaskState => ({
    taskItems: [],
    filters: {
      searchQuery: '',
      status: { value: undefined, label: 'All tasks' },
    },
  }),
  // getters: {},
  actions: {
    setTasks(tasks: Task[]) {
      this.taskItems = tasks
    },
    setSearchQuery(query: SearchQuery) {
      this.filters.searchQuery = query
    },
    setFilterStatus(status: FilterStatus) {
      this.filters.status = status
    },
  },
})
