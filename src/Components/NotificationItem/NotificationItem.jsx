import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import NotificationIcon from '../../shared/Components/PhotoUser/PhotoUser'

import './NotificationItem.scss'

const NotificationItem = ({
	notification: {
		id,
		user_photo,
		name,
		username,
		time,
		text_notification,
		icon_notification
	},
	owner
}) => {
	return (
		<div className="notification__container">
			<div className="notification__container-icon">
				<NotificationIcon url={icon_notification} size='32'/>
			</div>
			<div className="notification__container-content">
				<div className="notification__container-photo">
					<PhotoUser url={user_photo} size='32'/>
				</div>
				<div className="content__text">
					{name}{text_notification}
				</div>
			</div>
		</div>
	)
}

export default NotificationItem
