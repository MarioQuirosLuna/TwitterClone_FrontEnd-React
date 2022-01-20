import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Home from '../Pages/Home/Home'
import Notifications from '../Pages/Notifications/Notifications'
import Message from '../Pages/Message/Message'
import Profile from '../Pages/Profile/Profile'

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
						} isPage/>
					}/>
					<Route path="/home" element={
						<PageWrapper component={
							<Home />
						} isPage/>
					}/>
					<Route path="/notifications" element={
						<PageWrapper component={
							<Notifications/>
						}/>
					}/>
					<Route path="/Message" element={
						<PageWrapper component={
							<Message />
						} isMessagePage/>
					}/>
					<Route path="/profile" element={
						<PageWrapper component={
							<Profile />
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
