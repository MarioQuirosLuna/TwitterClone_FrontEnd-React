import React from 'react'

const PostContext = React.createContext({
	allPost: []
})

export const PostProvider = PostContext.Provider

export default PostContext