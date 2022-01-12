import NavNotificationsItem from '../../Components/NavNotificationsItem/NavNotificationsItem'

import './NavNotifications.scss'

const NavNotifications = () => {
	return (
		<div className="container">
			<section className="header">
				<div>
					<h2>Notifications</h2>
				</div>
				<div>
					Icon
				</div>             
			</section>
			<section className="main">
				<div className="main__content">
					<div className="form__options-btn">
						<NavNotificationsItem label="All"/>
					</div>
					<div className="form__options-btn">
						<NavNotificationsItem label="Mentions"/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NavNotifications