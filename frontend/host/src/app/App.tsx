import { Navigate, Route, Routes } from 'react-router-dom'

import ReactPage from '../pages/ReactDashboard/dashboard'
// import VuePage from '../pages/VueDashboard/dashboard'

function App() {
	return (
		<div className='m-4'>
			{/* <NavTab /> */}
			<div>
				<Routes>
					<Route path='/' element={<Navigate to='/react' />} />
					<Route path='/react' element={<ReactPage />} />
					{/* <Route path='/vue' element={<VuePage />} /> */}
				</Routes>
			</div>
		</div>
	)
}

export default App
