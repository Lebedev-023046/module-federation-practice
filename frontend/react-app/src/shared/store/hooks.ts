import { taskActions } from '@features/task-board/store/task.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const rootActions = {
	...taskActions
}

export function useActions() {
	const dispatch = useDispatch()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}
