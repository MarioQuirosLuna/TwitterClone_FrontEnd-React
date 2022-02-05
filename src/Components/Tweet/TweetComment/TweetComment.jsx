import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import TweetData from '../TweetData/TweetData'
const TweetComment = ({
	post: {
		user_photo,
		comments,
		retweets,
		likes
	},
	post,
	owner
}) => {
	return (
		<>
			<div className="tweet__container-photo">
				<PhotoUser url={user_photo} />
			</div>
			<div className="tweet__container-content">

				<TweetData post={post} />

				<div className="content__options">
					<div>
						<ChatBubbleOutlineOutlinedIcon />
						<span>{comments?.length}</span>
					</div>
					<div>
						<AutorenewOutlinedIcon />
						<span>{retweets?.length}</span>
					</div>
					<div>
						<FavoriteBorderOutlinedIcon />
						<span>{likes?.length}</span>
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
		</>
	)
}

export default TweetComment
