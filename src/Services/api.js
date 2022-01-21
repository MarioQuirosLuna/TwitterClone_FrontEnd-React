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