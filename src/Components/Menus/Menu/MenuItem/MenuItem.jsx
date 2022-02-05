import {useContext} from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.scss'
import {MenuActiveContext} from '../../../../Context/menuActive'

const MenuItem = ({
	option: { 
		icon,
		icon2,
		url,
		label
	}
}) => {
	const contextMenuActive=useContext(MenuActiveContext)
	const isActive=label===contextMenuActive?.activeTab
	const handleActive=()=>contextMenuActive?.setTab(label)
	return (
		<div className="MenuItem__exteriorContent">
			<div className={`${isActive ? 'active' :''}`} onClick={handleActive}>
				<Link to={url}>
					<div className="menuItem__content">
						{isActive ? 
							<label>{icon2}</label>
							:
							<label>{icon}</label>
						}
						<span className="menuItem__label">{label}</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default MenuItem
