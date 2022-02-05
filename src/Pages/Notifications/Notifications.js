import NavNotifications from '../../Components/NavPages/NavNotifications/NavNotifications'
import NotificationItem from '../../Components/NotificationItem/NotificationItem'

import './Notifications.scss'

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
	'notifications': [
		{
			'id': '1',
			'user_photo': undefined,
			'name': 'name user',
			'username': '@username',
			'time': '10m',
			'text_notification': ' te siguió',
			'icon_notification': undefined
		},
		{
			'id': '2',
			'user_photo': undefined,
			'name': 'name user',
			'username': '@username2',
			'time': '10m',
			'text_notification': ' te siguió',
			'icon_notification': undefined
		}
	]
}

const Notifications = () => {
	return (
		<div className="notifications__container">
			<NavNotifications />
			<div className="notificationItem__notificationsList">
				{user?.notifications?.map((notification, id) => {
					return <NotificationItem key={id} notification={notification} owner={user.username === notification.username} />
				})}
			</div>
		</div>
	)
}

export default Notifications