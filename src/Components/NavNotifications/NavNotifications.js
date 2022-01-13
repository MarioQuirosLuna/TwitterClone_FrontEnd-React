import NavNotificationsItem from '../../Components/NavNotificationsItem/NavNotificationsItem'

import './NavNotifications.scss'

const NavNotifications = () => {
	return (
		<div className="container__NavNotification">
			<section className="header__NavNotification">
				<div>
					<h2>Notifications</h2>
				</div>
				<div>
					Icon
				</div>             
			</section>
			<section className="main__NavNotification">
				<div className="mainContent__NavNotification">
					<NavNotificationsItem label="All"/>
					<NavNotificationsItem label="Mentions"/>
				</div>
			</section>
		</div>
	)
}

export default NavNotifications