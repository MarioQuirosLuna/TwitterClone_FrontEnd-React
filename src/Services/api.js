import axios from 'axios'

const PRODUCTION_URL = ''
const LOCAL_URL = 'http://localhost:3001/api'

export const getAllPost = async () => {
	try {
		const response = await fetch(`${LOCAL_URL}/home`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getUser = async (username) => {
	try {
		const response = await fetch(`${LOCAL_URL}/user/${username}`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getUserPosts = async (username) => {
	try {
		const response = await fetch(`${LOCAL_URL}/user/posts/${username}`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}