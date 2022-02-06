import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AppContext } from '../../Context/AppContext'

import useGetPostTime from '../../Hooks/useGetPostTime'

import TweetComment from '../../Components/Tweet/TweetComment/TweetComment'
import NavPostDetails from '../../Components/NavPages/NavPostDetails/NavPostDetails'

import ImagePosted from '../../shared/Components/ImagePosted/ImagePosted'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'
import TextBlue from '../../shared/Components/TextBlue/TextBlue'
import BtnTwitter from '../../shared/Components/BtnTwitter/BtnTwitter'

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'

import './PostDetails.scss'

const PostDetails = () => {

	const appContext = useContext(AppContext)
	const { idPost } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		setPost(appContext?.posts?.find((post) => post.id === idPost))
	}, [appContext?.posts, idPost])

	return (
		<div className="container__tweetDetails">
			<NavPostDetails />
			<section className="main__tweetDetails">
				<div className="tweetDetails__user">
					<PhotoUser url={post?.user_photo} />
					<div className="tweetDetails__data">
						<div className="tweetDetails__data-name">
							<div>
								<span>{post?.nameUser}</span>
							</div>
							<div className="username">
								<span>{post?.username}</span>
							</div>
						</div>
						<div className="tweetDetails__data-settings">
							<SettingsMenu />
						</div>
					</div>
				</div>
				<div className="tweetDetails__content">
					<div className="tweetDetails__content-textPosted">
						{post?.text_posted}
					</div>
					<div>
						{post?.media_posted && <ImagePosted url={post?.media_posted} />}
					</div>
					<div className="tweetDetails__content-translate">
						<TextBlue label="Translate Tweet" />
					</div>
					<div className="tweetDetails__content-timePosted">
						<span>{useGetPostTime(post?.postTime, true)}</span>
					</div>
				</div>
				<div className="tweetDetails__tweets">
					<div>
						{post?.retweets?.length} <span>Retweets</span>
					</div>
					<div>
						{post?.likes?.length} <span>Likes</span>
					</div>
				</div>
				<div className="tweetDetails__icons">
					<ChatBubbleOutlineOutlinedIcon />
					<AutorenewOutlinedIcon />
					<FavoriteBorderOutlinedIcon />
					<IosShareOutlinedIcon />
				</div>
				<div className="tweetDetails__newComment">
					<PhotoUser url={appContext?.user?.user_photo} />
					<input type="text" placeholder="Tweet your reply" />
					<div>
						<BtnTwitter label="Reply" />
					</div>
				</div>
			</section>
			<div>
				{post?.comments?.map((post, id) => {
					return <TweetComment key={id} post={post} />
				})}
			</div>
		</div>

	)
}

export default PostDetails
