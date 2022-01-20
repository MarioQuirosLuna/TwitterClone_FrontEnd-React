import './NavNotificationsItem.scss'

const NavNotificationsItem = ({
	option: {
		label
	}
}) => {
	return (
		<div className="container__navItem">
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

export default NavNotificationsItem