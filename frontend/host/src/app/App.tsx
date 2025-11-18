import { Navigate, Route, Routes } from 'react-router-dom'
import { ReactPage } from '../pages/ReactDashboard'
import { VuePage } from '../pages/VueDashboard'
import { Header } from '../shared/ui/layout'

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Navigate to='/react' />} />
				<Route path='/react' element={<ReactPage />} />
				{/* <Route path='/react' element={<div>React</div>} /> */}
				<Route path='/vue' element={<VuePage />} />
			</Routes>
		</>
	)
}

export default App
