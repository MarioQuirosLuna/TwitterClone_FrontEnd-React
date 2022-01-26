import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined'
import './NavList.scss'

const NavList = () => {
	return (
		<div className="container__navList">
			<section className="header__NavList">
				<div className="container__NavList-title">
					<h2>List</h2>
					<span>@usuario</span>
				</div>
				<div className="container__NavList-iconList">
					<PlaylistAddOutlinedIcon/>
				</div>
				<div className="container__NavList-iconSettingsList">
					<SettingsMenu/>
				</div>      
			</section>
		</div>
	)
}

export default NavList