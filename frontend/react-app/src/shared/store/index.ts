import { tasksReducer } from '@features/task-board/store/task.slice'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
	reducer: {
		tasks: tasksReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
