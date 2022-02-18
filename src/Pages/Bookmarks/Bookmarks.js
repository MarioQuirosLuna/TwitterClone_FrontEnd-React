import { useContext, useEffect } from 'react'

import NavBookmarks from '../../Components/NavPages/NavBookmarks/NavBookmarks'
import TweetPost from '../../Components/Tweet/TweetPost/TweetPost'
import { AppContext } from '../../Context/AppContext'
import { getAllPost } from '../../Services/api'
import './Bookmarks.scss'

const Message = () => {
	const appContext = useContext(AppContext)

	useEffect(() => {
		const fetching = async () => {
			appContext?.setPosts(await getAllPost())
		}
		fetching()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<section className="bookmarks__container">
			<NavBookmarks />
			<div className="bookmarks__tweetsList">
				{appContext?.posts?.map((post, id) => {
					return <TweetPost key={id} post={post} />
				})}
			</div>
		</section>
	)
}

export default Message
