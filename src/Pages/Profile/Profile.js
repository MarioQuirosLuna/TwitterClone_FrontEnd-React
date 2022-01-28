import { useContext, useEffect, useState } from 'react'

import { AppContext } from '../../Context/AppContext'

import NavProfile from '../../Components/NavProfile/NavProfile'
import MenuTweetsProfile from '../../Components/MenuTweetsProfile/MenuTweetsProfile'
import TweetPost from '../../Components/TweetPost/TweetPost'
import { getUserPosts } from '../../Services/api'

const Profile = () => {

	const appContext = useContext(AppContext)
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		const fetchPosts = async () => {
			if (appContext?.user)
				setPosts(await getUserPosts(appContext?.user.username))
		}
		fetchPosts()
	}, [appContext])

	return (
		<div className="profile__container">
			{appContext?.user &&
				<>
					<NavProfile user={appContext?.user} />
					<MenuTweetsProfile />
					<div className="home__tweetsList">
						{posts?.map((post, id) => {
							return <TweetPost key={id} post={post} owner={appContext?.user.username === post.username} />
						})}
					</div>
				</>
			}
		</div>
	)
}

export default Profile
