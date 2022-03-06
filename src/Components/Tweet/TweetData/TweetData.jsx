import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ListOptions } from './ListOptions'

import ImagePosted from '../../../shared/Components/ImagePosted/ImagePosted'
import SettingsMenu from '../../../shared/Components/SettingsMenu/SettingsMenu'
import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'

import useGetPostTime from '../../../Hooks/useGetPostTime'

const TweetData = ({
	post: {
		id,
		_id,
		user_photo,
		nameUser,
		username,
		postTime,
		text_posted,
		media_posted
	}
}) => {

	const [showMenu, setShowMenu] = useState(false)

	const handleShowMenuTweet = (target) => {
		if (target) {
			setShowMenu(true)
		} else {
			setShowMenu(false)
		}
	}

	return (
		<div className="tweet__linkContainer">
			<Link to={`/${username}/status/${id ? id : _id}`} className="tweet__linkContent link">
				<div className="tweet__container-tweetData" >
					<div className="tweet__container-photo">
						<PhotoUser url={user_photo} />
					</div>
					<div className="tweet__container-content">
						<div className="content__nav">
							<div className="content__nav-data">
								<span className="nav__data-name">{nameUser}</span>
								<span className="nav__data-username">{username}</span>
								<span className="nav__data-time">· {useGetPostTime(postTime)}</span>
							</div>
						</div>
						<div className="content__text">
							{text_posted}
						</div>
						<div className="content__media">
							{media_posted && <ImagePosted url={media_posted} />}
						</div>
					</div>
				</div>
			</Link>
			<div className="content__nav-settings">
				<SettingsMenu listOptions={ListOptions} showMenu={showMenu} handleShowMenu={handleShowMenuTweet} />
			</div>
		</div>
	)
}

export default TweetData