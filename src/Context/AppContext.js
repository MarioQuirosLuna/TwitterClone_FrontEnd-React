import React, { createContext, useEffect, useState } from 'react'
import { getUser } from '../Services/api'

export const AppContext = createContext({})

const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const initialState = {
		user, setUser
	}

	useEffect(() => {
		const fetch = async () => {
			setUser(await getUser('@UserTest'))
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