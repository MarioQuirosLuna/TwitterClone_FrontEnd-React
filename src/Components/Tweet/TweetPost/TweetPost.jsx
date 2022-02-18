import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../../../Context/AppContext'

import useIsMyTweet from '../../../Hooks/useIsMyTweet'

import TweetData from '../TweetData/TweetData'

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
		username,
		comments,
		retweets,
		likes
	},
	post
}) => {
	const appContext = useContext(AppContext)

	return (
		<div className="Tweet__container">
			<Link to={`/${username}/status/${id ? id : _id}`} className="tweet__linkContainer link">
				<TweetData post={post} />
			</Link>
			<div className="content__options">
				<div className="content__option-right">
					<div className="option comments" onClick={() => console.log('click comments')} >
						<i>
							<ChatBubbleOutlineOutlinedIcon />
						</i>
						<span>{comments?.length}</span>
					</div>
					<div className="option retweet" onClick={() => console.log('click retweets')} >
						<i>
							<AutorenewOutlinedIcon />
						</i>
						<span>{retweets?.length}</span>
					</div>
					<div className="option like" onClick={() => console.log('click like')} >
						<i>
							<FavoriteBorderOutlinedIcon />
						</i>
						<span>{likes?.length}</span>
					</div>
					<div className="option share" onClick={() => console.log('click share')} >
						<i>
							<IosShareOutlinedIcon />
						</i>
					</div>
					{useIsMyTweet(username, appContext?.user?.username) &&
						<div className="option statistics" onClick={() => console.log('click statistics')} >
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

export default TweetPost
