import ImagePosted from '../../shared/Components/ImagePosted/ImagePosted'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'

import useGetPostTime from '../../Hooks/useGetPostTime'

import './TweetPost.scss'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import { Link } from 'react-router-dom'

const TweetPost = ({
	post: {
		id,
		_id,
		user_photo,
		nameUser,
		username,
		postTime,
		text_posted,
		media_posted,
		comments,
		retweets,
		likes
	},
	owner
}) => {
	return (
		<Link to={`/${username}/status/${id ? id : _id}`} className="tweet__container">
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
					<div className="content__nav-settings">
						<SettingsMenu />
					</div>
				</div>
				<div className="content__text">
					{text_posted}
				</div>
				<div className="content__media">
					{media_posted && <ImagePosted url={media_posted} />}
				</div>
				<div className="content__options">
					<div onClick={() => console.log('click comments')} >
						<ChatBubbleOutlineOutlinedIcon />
						<span>{comments.length}</span>
					</div>
					<div onClick={() => console.log('click retweets')} >
						<AutorenewOutlinedIcon />
						<span>{retweets.length}</span>
					</div>
					<div onClick={() => console.log('click like')} >
						<FavoriteBorderOutlinedIcon />
						<span>{likes.length}</span>
					</div>
					<div onClick={() => console.log('click shared')} >
						<IosShareOutlinedIcon />
					</div>
					{owner &&
						<div>
							<BarChartOutlinedIcon />
						</div>
					}
				</div>
			</div>
		</Link>
	)
}

export default TweetPost
