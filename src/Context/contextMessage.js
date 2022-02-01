import React from 'react'

const MessageContext= React.createContext({
	userMessage: null
})

export const MessageProvider=MessageContext.Provider
export default MessageContext