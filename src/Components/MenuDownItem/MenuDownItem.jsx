import { Link } from 'react-router-dom'
import './MenuDownItem.scss'

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
				<div className="menuDownItem__content">
					<label>{icon}</label>
				</div>
			</Link>
		</>
	)
}

export default MenuItem
