import { taskActions } from '@features/task-board/store/task.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export function useActions() {
	const dispatch = useDispatch()

	return useMemo(() => {
		return {
			taskActions: bindActionCreators(taskActions, dispatch)
		}
	}, [dispatch])
}
