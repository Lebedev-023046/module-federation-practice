import type { Task } from '@entities/task/model'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type SearchQuery = string
export type FilterStatus = undefined | boolean

interface TaskState {
	tasks: Task[]
	filters: {
		searchQuery: SearchQuery
		status: FilterStatus
	}
}

const initialState: TaskState = {
	tasks: [],
	filters: { searchQuery: '', status: undefined }
}

export const taskSlice = createSlice({
	name: 'task',
	initialState: initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.filters.searchQuery = action.payload
		},
		setFulterStatus: (state, action: PayloadAction<boolean | undefined>) => {
			state.filters.status = action.payload
		},
		setTasks: (state, action: PayloadAction<Task[]>) => {
			state.tasks = action.payload
		},
		addTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload)
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			const { id, ...rest } = action.payload
			state.tasks = state.tasks.map(task => {
				return task.id === id ? { ...task, ...rest } : task
			})
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		}
	}
})

export const taskActions = taskSlice.actions
export const tasksReducer = taskSlice.reducer
