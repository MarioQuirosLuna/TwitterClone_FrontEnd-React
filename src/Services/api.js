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

export const newPost = async (newPost) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const req = axios.post(`${LOCAL_URL}/post`, newPost, config)
	return req
		.then((res) => res.data)
		.catch(error => { console.error(error) })
}

export const deletePost = async (username, id) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.delete(`${LOCAL_URL}/post/delete/${username}/${id}`, config)
	return req
		.then((res) => res.data)
		.catch(error => { console.error(error) })
}

export const newComment = async (username, id, newComment) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.put(`${LOCAL_URL}/post/comment/${username}/${id}`, newComment, config)
	return req
		.then((res) => res.data)
		.catch(error => { console.error(error) })
}

export const newLike = async (id, newLike) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.put(`${LOCAL_URL}/post/like/${id}`, newLike, config)
	return req
		.then((res) => res.data)
		.catch(error => { console.error(error) })
}

export const signUpUser = async (register) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.post(`${LOCAL_URL}/login/register`, register, config)
	return req
		.then((res) => res.data)
		.catch((err) => { console.error(err) })
}

export const verificationAccount = async (userIdentification) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.post(`${LOCAL_URL}/login/verify`, userIdentification, config)
	return req
		.then((res) => res.data)
		.catch((err) => { console.error(err) })
}

export const logInUser = async (logInUser) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}
	const req = axios.post(`${LOCAL_URL}/login/`, logInUser, config)
	return req
		.then((res) => res.data)
		.catch((err) => { console.error(err) })
}