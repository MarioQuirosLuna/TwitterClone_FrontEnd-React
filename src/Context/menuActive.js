import React, { createContext, useState, useEffect } from 'react'

export const MenuActiveContext = createContext({})

const MenuActiveProvider = ({ children }) => {

	const [activeTab, setTab] = useState(null)
	const [popUp, setPopUp] = useState(null)
	const initialTab = {
		activeTab, setTab,
		popUp, setPopUp
	}
	useEffect(() => {
		setTab('Home')
		setPopUp(false)
	}, [])

	return (
		<MenuActiveContext.Provider value={initialTab}>
			{children}
		</MenuActiveContext.Provider>
	)
}

export default MenuActiveProvider
