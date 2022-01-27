import { Link } from 'react-router-dom'
import './MenuItem.scss'

const MenuItem = ({
	option: { 
		icon,
		url,
		label
	}
}) => {
	return (
		<>
			<Link to={url}>
				<div className="menuItem__content">
					<label>{icon}</label>
					<span className="menuItem__label">{label}</span>
				</div>
			</Link>
		</>
	)
}

export default MenuItem
