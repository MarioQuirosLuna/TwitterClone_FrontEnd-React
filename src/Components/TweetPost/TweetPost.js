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

const TweetPost = ({
	post: {
		id,
		user_photo,
		nameUser,
		username,
		postTime,
		text_posted,
		media_posted
	},
	owner
}) => {
	return (
		<div className="tweet__container">
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
					<div>
						<ChatBubbleOutlineOutlinedIcon />
						<span>1</span>
					</div>
					<div>
						<AutorenewOutlinedIcon />
						<span>2</span>
					</div>
					<div>
						<FavoriteBorderOutlinedIcon />
						<span>3</span>
					</div>
					<div>
						<IosShareOutlinedIcon />
					</div>
					{owner &&
						<div>
							<BarChartOutlinedIcon />
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default TweetPost
