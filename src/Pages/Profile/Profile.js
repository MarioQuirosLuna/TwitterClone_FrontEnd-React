import { useContext, useEffect, useState } from 'react'

import { AppContext } from '../../Context/AppContext'

import NavProfile from '../../Components/NavProfile/NavProfile'
import MenuTweetsProfile from '../../Components/MenuTweetsProfile/MenuTweetsProfile'
import TweetPost from '../../Components/TweetPost/TweetPost'

const Profile = () => {

	const appContext = useContext(AppContext)
	const [user, setUser] = useState(null)

	useEffect(() => {
		const fetching = async () => {
			setUser(await appContext?.user)
		}
		fetching()
	}, [appContext?.user])

	return (
		<div className="profile__container">
			{user &&
				<>
					<NavProfile user={user} />
					<MenuTweetsProfile />
					<div className="home__tweetsList">
						{user?.posts?.map((post, id) => {
							return <TweetPost key={id} post={post} owner={user.username === post.username} />
						})}
					</div>
				</>
			}
		</div>
	)
}

export default Profile
