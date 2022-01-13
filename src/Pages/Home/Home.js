import Happening from '../../Components/Happening/Happening'
import TweetPost from '../../Components/TweetPost/TweetPost'

import './Home.scss'

const posts = [
	{
		'id': '1',
		'user_photo': undefined,
		'name': 'name user',
		'username': '@username',
		'time': '10m',
		'text_posted': 'Hello Javascript',
		'media_posted': 'https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg'
	},
	{
		'id': '2',
		'user_photo': undefined,
		'name': 'name user',
		'username': '@username',
		'time': '10m',
		'text_posted': 'Hello React',
		'media_posted': undefined
	},
	{
		'id': '3',
		'user_photo': undefined,
		'name': 'name user',
		'username': '@username',
		'time': '10m',
		'text_posted': 'Hello Html',
		'media_posted': 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
	},
	{
		'id': '4',
		'user_photo': undefined,
		'name': 'name user',
		'username': '@username',
		'time': '10m',
		'text_posted': 'Hello Css',
		'media_posted': undefined
	}
]

const Home = () => {
	return (
		<div className="home__container">
			<Happening />
			<div className="home__tweetsList">
				{posts?.map((post, id) => {
					return <TweetPost key={id} post={post}/>
				})}
			</div>
		</div>
	)
}

export default Home
