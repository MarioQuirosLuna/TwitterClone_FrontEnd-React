import React, { createContext, useState, useEffect } from 'react'

export const MenuActiveContext = createContext({})

const MenuActiveProvider = ({ children }) => {

	const [activeTab, setTab] = useState(null)
	const initialTab = { activeTab, setTab }
	useEffect(()=>{
		setTab('Home')
	},[])
	return (
		<MenuActiveContext.Provider value={initialTab}>
			{children}
		</MenuActiveContext.Provider>
	)
}

export default MenuActiveProvider
