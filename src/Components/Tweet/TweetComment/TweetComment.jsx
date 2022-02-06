import { useContext } from 'react'

import { AppContext } from '../../../Context/AppContext'

import useIsMyTweet from '../../../Hooks/useIsMyTweet'

import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'
import TweetData from '../TweetData/TweetData'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

import '../Tweet.scss'

const TweetComment = ({
	post: {
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
		<div className="tweet__container">
			<div className="tweet__container-photo">
				<PhotoUser url={user_photo} />
			</div>
			<div className="tweet__container-content">

				<TweetData post={post} />

				<div className="content__options">
					<div>
						<ChatBubbleOutlineOutlinedIcon />
						<span>0</span>
					</div>
					<div>
						<AutorenewOutlinedIcon />
						<span>0</span>
					</div>
					<div>
						<FavoriteBorderOutlinedIcon />
						<span>0</span>
					</div>
					<div>
						<IosShareOutlinedIcon />
					</div>
					{useIsMyTweet(username, appContext?.user?.username) &&
						<div>
							<BarChartOutlinedIcon />
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default TweetComment
