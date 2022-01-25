import React, { createContext, useEffect, useState } from 'react'

import { getAllPost } from '../Services/api'

export const AppContext = createContext({})

const AppProvider = ({ children }) => {
	const [posts, setPosts] = useState(null)
	const [history, setHistory] = useState([])
	const initialState = { posts, setPosts, history, setHistory }

	const fetching = async () => {
		setPosts(await getAllPost())
	}

	useEffect(() => {
		fetching()
	}, [])

	return (
		<AppContext.Provider value={initialState} >
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider