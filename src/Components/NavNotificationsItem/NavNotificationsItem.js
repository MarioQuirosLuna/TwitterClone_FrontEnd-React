import './NavNotificationsItem.scss'

const NavNotificationsItem = ({ label='ItemLabel' }) => {
	return (
		<div className="container__navItem">
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

export default NavNotificationsItem