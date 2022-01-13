import './NavNotificationsItem.scss'

const NavItem = ({ label='ItemLabel' }) => {
	return (
		<div className="container__navItem">
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

export default NavItem