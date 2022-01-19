import NavProfile from '../../Components/NavProfile/NavProfile'
import MenuTweetsProfile from '../../Components/MenuTweetsProfile/MenuTweetsProfile'
import TweetPost from '../../Components/TweetPost/TweetPost'

const user = {
	'user_photo': undefined,
	'image_background': 'https://www.xtrafondos.com/wallpapers/vertical/noche-en-las-montanas-con-planetas-de-fondo-7980.jpg',
	'name': 'User Name Logged',
	'username': '@username',
	'description': 'user description biography',
	'joined_date': 'May 2019',
	'count_tweets': 33,
	'following': 49,
	'followers': 8,
	'posts': [
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
		}
	]
}

const Profile = () => {
	return (
		<div className="profile__container">
			<NavProfile user={user} />
			<MenuTweetsProfile />
			<div className="home__tweetsList">
				{user?.posts?.map((post, id) => {
					//TODO: change post user profile
					return <TweetPost key={id} post={post} />
				})}
			</div>
		</div>
	)
}

export default Profile
