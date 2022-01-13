import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Home from '../Pages/Home/Home'
import Message from '../Pages/Message/Message'

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
					<Route path="/Message" element={
						<PageWrapper component={
							<Message />
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
