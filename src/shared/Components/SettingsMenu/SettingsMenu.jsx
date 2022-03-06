import SettingItem from './SettingItem'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import './SettingsMenu.scss'


const SettingsMenu = ({
	id,
	username,
	listOptions,
	showMenu,
	handleShowMenu
}) => {

	return (
		<div className="settingsMenu__container">
			<div className="settings" onClick={() => handleShowMenu(true)}>
				<i>
					<MoreHorizOutlinedIcon />
				</i>
			</div>
			{showMenu &&
				<div className="settings__menuDown">
					<ul>
						{listOptions?.map(option => {
							return (
								<SettingItem
									key={option.label}
									username={username}
									id={id}
									option={option}
									handleShowMenu={handleShowMenu}
								/>
							)
						})}
					</ul>
				</div>
			}
		</div>
	)
}

export default SettingsMenu
