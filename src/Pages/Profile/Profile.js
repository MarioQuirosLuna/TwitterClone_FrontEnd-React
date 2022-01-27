import { useContext } from 'react'

import { AppContext } from '../../Context/AppContext'

import NavProfile from '../../Components/NavProfile/NavProfile'
import MenuTweetsProfile from '../../Components/MenuTweetsProfile/MenuTweetsProfile'
import TweetPost from '../../Components/TweetPost/TweetPost'

const Profile = () => {

	const appContext = useContext(AppContext)
	const user = appContext?.user
	console.log(appContext)

	return (
		<div className="profile__container">
			<NavProfile user={user} />
			<MenuTweetsProfile />
			<div className="home__tweetsList">
				{user?.posts?.map((post, id) => {
					return <TweetPost key={id} post={post} owner={user.username === post.username} />
				})}
			</div>
		</div>
	)
}

export default Profile
