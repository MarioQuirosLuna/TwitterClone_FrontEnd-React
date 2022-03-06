
import './SettingItem.scss'

const MenuItem = ({
	id,
	option: {
		icon,
		url,
		action,
		label
	},
	handleShowMenu
}) => {
	return (
		<li className="itemMenuTweet__container">
			<div to={url} className="itemMenuTweet__Option" onClick={() => { action(id); handleShowMenu(false) }}>
				<label className={`${label === 'Delete' ? 'delete' : ''}`}>{icon}</label>
				<span className={`${label === 'Delete' ? 'delete' : ''}`}>{label}</span>
			</div>
		</li>
	)
}

export default MenuItem