import React, { createContext, useEffect, useState } from 'react'
import { getAllPost, getUser } from '../Services/api'

export const AppContext = createContext({})

const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [posts, setPosts] = useState(null)
	const initialState = {
		user, setUser,
		posts, setPosts
	}

	useEffect(() => {
		const fetch = async () => {
			setUser(await getUser('@UserTest'))
			setPosts(await getAllPost())
		}
		fetch()
	}, [])

	return (
		<AppContext.Provider value={initialState} >
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider