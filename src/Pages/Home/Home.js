import { useContext } from 'react'
import Happening from '../../Components/NavHome/NavHome'
import TweetPost from '../../Components/TweetPost/TweetPost'

import { AppContext } from '../../Context/AppContext'

import './Home.scss'

const Home = () => {

	const appContext = useContext(AppContext)
	const posts = appContext.posts

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
