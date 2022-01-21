import NavNotificationsItem from '../NavNotificationsItem/NavNotificationsItem'

import SettingsMenuGear from '../../shared/Components/SettingsMenuGear/SettingsMenuGear'
import { NavNotificationsMenuListOptions } from './NavNotificationsListOption'

import './NavNotifications.scss'

const NavNotifications = () => {
	return (
		<div className="container__NavNotification">
			<section className="header__NavNotification">
				<div>
					<h2>Notifications</h2>
				</div>
				<div>
					<SettingsMenuGear/>
				</div>             
			</section>
			<section className="main__NavNotification">
				<div className="mainContent__NavNotification">
					{NavNotificationsMenuListOptions?.map((option, index) => {
						return (
							<NavNotificationsItem key={index} option={option} />
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default NavNotifications