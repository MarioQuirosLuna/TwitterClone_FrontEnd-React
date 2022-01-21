import { useEffect, useState } from 'react'
import Happening from '../../Components/NavHome/NavHome'
import TweetPost from '../../Components/TweetPost/TweetPost'

import { getAllPost } from '../../Services/api'

import './Home.scss'

const Home = () => {

	const [posts, setPosts] = useState(null)

	const fetching = async () => {
		setPosts(await getAllPost())
	}

	useEffect(() => {
		fetching()
	}, [])

	return (
		<div className="home__container">
			<Happening />
			<div className="home__tweetsList">
				{posts?.map((post, id) => {
					return <TweetPost key={id} post={post} />
				})}
			</div>
		</div>
	)
}

export default Home
