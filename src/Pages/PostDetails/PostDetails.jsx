import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AppContext } from '../../Context/AppContext'
import useGetPostTime from '../../Hooks/useGetPostTime'
import ImagePosted from '../../shared/Components/ImagePosted/ImagePosted'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'
import TextBlue from '../../shared/Components/TextBlue/TextBlue'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'

import './PostDetails.scss'
import BtnTwitter from '../../shared/Components/BtnTwitter/BtnTwitter'
import TweetPost from '../../Components/TweetPost/TweetPost'

const PostDetails = () => {

	const appContext = useContext(AppContext)
	const { idPost } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		setPost(appContext?.posts?.find((post) => post.id === idPost))
	}, [appContext?.posts, idPost])
	return (
		<div>
			<div>
				<div>
					<PhotoUser url={post?.user_photo} />
					<div>
						<div>
							<span>{post?.nameUser}</span>
							<span>{post?.username}</span>
						</div>
						<div>
							<SettingsMenu />
						</div>
					</div>
				</div>
				<div>
					<div>
						{post?.text_posted}
					</div>
					<div>
						{post?.media_posted && <ImagePosted url={post?.media_posted} />}
					</div>
					<div>
						<TextBlue label="Translate Tweet" />
					</div>
					<div>
						<span>{useGetPostTime(post?.postTime, true)}</span>
					</div>
				</div>
				<div>
					<div>
						<span>{post?.retweets?.length} Retweets</span>
					</div>
					<div>
						<span>{post?.likes?.length} Likes</span>
					</div>
				</div>
				<div>
					<ChatBubbleOutlineOutlinedIcon />
					<AutorenewOutlinedIcon />
					<FavoriteBorderOutlinedIcon />
					<IosShareOutlinedIcon />
				</div>
				<div>
					<PhotoUser />
					<input type="text" />
					<div>
						<BtnTwitter label="Reply" />
					</div>
				</div>
			</div>
			<div>
				{post?.comments?.map((post, id) => {
					return <TweetPost key={id} post={post} />
				})}
			</div>
		</div>

	)
}

export default PostDetails
