import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Home from '../Pages/Home/Home'
import Notifications from '../Pages/Notifications/Notifications'

import './App.scss'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<PageWrapper component={
							<Home />
						}/>
					}/>
					<Route path="/notifications" element={
						<PageWrapper component={
							<Notifications/>
						}/>
					}/>
					<Route path="*" element={
						<Navigate to="/"/>
					}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
