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

import { PostProvider } from '../Context/postContext'

import './App.scss'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<PostProvider value={{ allPost: [] }}>
					<Routes>
						<Route path="/" element={
							<PageWrapper component={
								<div>
									default page
								</div>
							} isPage />
						} />
						<Route path="/home" element={
							<PageWrapper component={
								<Home />
							} isPage />
						} />
						<Route path="/profile" element={
							<PageWrapper component={
								<Profile />
							} isPage />
						} />
						<Route path="/notifications" element={
							<PageWrapper component={
								<Notifications />
							} isPage />
						} />
						<Route path="/Message" element={
							<PageWrapper component={
								<Message />
							} isMessagePage />
						} />
						<Route path="*" element={
							<Navigate to="/" />
						} />
					</Routes>
				</PostProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
