import {
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Default from '../Pages/Default/Default'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Notifications from '../Pages/Notifications/Notifications'
import Message from '../Pages/Message/Message'
import Bookmarks from '../Pages/Bookmarks/Bookmarks'
import Profile from '../Pages/Profile/Profile'
import PostDetails from '../Pages/PostDetails/PostDetails'

import AppProvider from '../Context/AppContext'
import MenuActiveProvider from '../Context/menuActive'

import './App.scss'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<AppProvider>
					<MenuActiveProvider>
						<Routes>
							<Route path="/" element={
								<PageWrapper component={
									<Default />
								} isDefaultPage />
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
							<Route path="/Bookmarks" element={
								<PageWrapper component={
									<Bookmarks />
								} isPage />
							} />
							<Route path="/:user/status/:idPost" element={
								<PageWrapper component={
									<PostDetails />
								} isPage />
							} />
							<Route path="/login" element={
								<PageWrapper component={
									<Login />
								} isLoginPage />
							} />
							<Route path="/register" element={
								<PageWrapper component={
									<Register />
								} isLoginPage />
							} />
							<Route path="*" element={
								<Navigate to="/" />
							} />
						</Routes>
					</MenuActiveProvider>
				</AppProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
