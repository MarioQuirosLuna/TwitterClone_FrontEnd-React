import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<div>Home</div>
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
