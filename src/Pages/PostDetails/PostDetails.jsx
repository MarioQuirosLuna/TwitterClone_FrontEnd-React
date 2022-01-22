import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AppContext } from '../../Context/AppContext'
import useGetPostTime from '../../Hooks/useGetPostTime'
import ImagePosted from '../../shared/Components/ImagePosted/ImagePosted'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'
import TextBlue from '../../shared/Components/TextBlue/TextBlue'

import './PostDetails.scss'

const PostDetails = () => {

	const appContext = useContext(AppContext)
	const { idPost } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		setPost(appContext?.posts?.find((post) => post.id === idPost))
	}, [appContext?.posts, idPost])

	return (
		<div>
			<div className="tweet__container-photo">
				<PhotoUser url={post?.user_photo} />
			</div>
			<div className="tweet__container-content">
				<div className="content__nav">
					<div className="content__nav-data">
						<span className="nav__data-name">{post?.nameUser}</span>
						<span className="nav__data-username">{post?.username}</span>
					</div>
					<div className="content__nav-settings">
						<SettingsMenu />
					</div>
				</div>
				<div className="content__text">
					{post?.text_posted}
				</div>
				<div className="content__media">
					{post?.media_posted && <ImagePosted url={post?.media_posted} />}
				</div>
				<div>
					<TextBlue label="Translate Tweet" />
				</div>
				<div>
					<span className="nav__data-time">{useGetPostTime(post?.postTime, true)}</span>
				</div>
			</div>
		</div>

	)
}

export default PostDetails
