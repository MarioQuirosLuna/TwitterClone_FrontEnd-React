import { useContext } from 'react'

import { AppContext } from '../../../Context/AppContext'
import { MenuActiveContext } from '../../../Context/menuActive'

import { getAllPost, newPost } from '../../../Services/api'

import './BtnTwitter.scss'

const BtnTwitter = ({ label = 'BtnLabel', textPost, setTextPost, media_posted }) => {

	const appContext = useContext(AppContext)
	const menuContext = useContext(MenuActiveContext)

	const ClosePopUp = () => {
		menuContext?.setPopUp(false)
	}

	const handleSubmitNewPost = async (e) => {
		e.preventDefault()
		try {
			const Post = {
				'user_photo': appContext?.user?.user_photo,
				'nameUser': appContext?.user?.name,
				'username': appContext?.user?.username,
				'text_posted': textPost
			}
			await newPost(Post)
			appContext?.setPosts(await getAllPost())
			if (menuContext?.popUp) {
				ClosePopUp()
			} else {
				setTextPost('')
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="container__btnTwitter" onClick={handleSubmitNewPost}>
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

export default BtnTwitter
