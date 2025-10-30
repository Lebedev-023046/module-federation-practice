import type { Task } from '@entities/task/model'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

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

const initialState: TaskState = {
	taskItems: [],
	filters: { searchQuery: '', status: { value: undefined, label: 'All tasks' } }
}

export const taskSlice = createSlice({
	name: 'task',
	initialState: initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.filters.searchQuery = action.payload
		},
		setFilterStatus: (state, action: PayloadAction<FilterStatus>) => {
			state.filters.status = action.payload
		},
		setTasks: (state, action: PayloadAction<Task[]>) => {
			state.taskItems = action.payload
		},
		addTask: (state, action: PayloadAction<Task>) => {
			state.taskItems.push(action.payload)
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			const { id, ...rest } = action.payload
			state.taskItems = state.taskItems.map(task => {
				return task.id === id ? { ...task, ...rest } : task
			})
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.taskItems = state.taskItems.filter(
				task => task.id !== action.payload
			)
		}
	}
})

export const taskActions = taskSlice.actions
export const tasksReducer = taskSlice.reducer
