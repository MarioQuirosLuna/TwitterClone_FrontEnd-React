import {useContext} from 'react'
import { Link } from 'react-router-dom'
import './MenuDownItem.scss'
import {MenuActiveContext} from '../../Context/menuActive'

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
		<div className="MenuDownItem__exteriorContent">
			<div className={`${isActive ? 'active' :''}`} onClick={handleActive}>
				<Link to={url}>
					<div className="menuDownItem__content">
						{isActive ? 
							<label>{icon2}</label>
							:
							<label>{icon}</label>
						}
					</div>
				</Link>
			</div>
		</div>
	)
}

export default MenuItem
