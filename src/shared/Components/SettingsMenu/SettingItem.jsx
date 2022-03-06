import { Link } from 'react-router-dom'

import './SettingItem.scss'

const MenuItem = ({
	option: {
		icon,
		url,
		label
	},
	handleShowMenu
}) => {
	return (
		<li className="itemMenuTweet__container">
			<Link to={url} className="itemMenuTweet__Option" onClick={() => handleShowMenu(false)}>
				<label className={`${label === 'Delete' ? 'delete' : ''}`}>{icon}</label>
				<span className={`${label === 'Delete' ? 'delete' : ''}`}>{label}</span>
			</Link>
		</li>
	)
}

export default MenuItem