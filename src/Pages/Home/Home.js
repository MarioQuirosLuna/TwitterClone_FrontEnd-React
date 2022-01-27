import { useEffect, useState } from 'react'
import NavHome from '../../Components/NavHome/NavHome'
import TweetPost from '../../Components/TweetPost/TweetPost'

import { getAllPost } from '../../Services/api'

import './Home.scss'

const Home = () => {
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		const fetching = async () => {
			setPosts(await getAllPost())
		}
		fetching()
	}, [])

	return (
		<div className="home__container">
			<NavHome />
			<div className="home__tweetsList">
				{posts?.map((post, id) => {
					return <TweetPost key={id} post={post} />
				})}
			</div>
		</div>
	)
}

export default Home
