import { useContext } from 'react'

import { AppContext } from '../../../Context/AppContext'

import useIsMyTweet from '../../../Hooks/useIsMyTweet'

import TweetDataComment from '../TweetData/TweetDataComment'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

import '../Tweet.scss'

const TweetComment = ({
	post: {
		username
	},
	post
}) => {
	const appContext = useContext(AppContext)

	return (
		<div className="Tweet__container">
			<TweetDataComment post={post} />
			<div className="content__options">
				<div className="content__option-right">
					<div className="option comments">
						<i>
							<ChatBubbleOutlineOutlinedIcon />
						</i>
						<span>0</span>
					</div>
					<div className="option retweet">
						<i>
							<AutorenewOutlinedIcon />
						</i>
						<span>0</span>
					</div>
					<div className="option like">
						<i>
							<FavoriteBorderOutlinedIcon />
						</i>
						<span>0</span>
					</div>
					<div className="option share">
						<i>
							<IosShareOutlinedIcon />
						</i>
					</div>
					{useIsMyTweet(username, appContext?.user?.username) &&
						<div className="option statistics">
							<i>
								<BarChartOutlinedIcon />
							</i>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default TweetComment
