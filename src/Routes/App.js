import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'

import './App.scss'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<PageWrapper component={
							<div>
								default page
							</div>
						}/>
					}/>
					<Route path="/home" element={
						<PageWrapper component={
							<Home />
						}/>
					}/>
					<Route path="*" element={
						<Navigate to="/"/>
					}/>
					<Route path="/login" element={
						<PageWrapper component={
							<Login />
						} isLoginPage />
					}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
