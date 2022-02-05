import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../../../Context/AppContext'

import useIsMyTweet from '../../../Hooks/useIsMyTweet'

import TweetData from '../TweetData/TweetData'
import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

import '../Tweet.scss'

const TweetPost = ({
	post: {
		id,
		_id,
		user_photo,
		username,
		comments,
		retweets,
		likes
	},
	post
}) => {
	const appContext = useContext(AppContext)

	return (
		<Link to={`/${username}/status/${id ? id : _id}`} className="tweet__container">
			<div className="tweet__container-photo">
				<PhotoUser url={user_photo} />
			</div>
			<div className="tweet__container-content">

				<TweetData post={post} />

				<div className="content__options">
					<div onClick={() => console.log('click comments')} >
						<ChatBubbleOutlineOutlinedIcon />
						<span>{comments?.length}</span>
					</div>
					<div onClick={() => console.log('click retweets')} >
						<AutorenewOutlinedIcon />
						<span>{retweets?.length}</span>
					</div>
					<div onClick={() => console.log('click like')} >
						<FavoriteBorderOutlinedIcon />
						<span>{likes?.length}</span>
					</div>
					<div onClick={() => console.log('click shared')} >
						<IosShareOutlinedIcon />
					</div>
					{useIsMyTweet(username, appContext?.user?.username) &&
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
