import SettingsMenu from '../../shared/Components/SettingsMenu/SettingsMenu'
import './NavList.scss'

const NavList = () => {
	return (
		<div className="container__navList">
			<section className="header__NavList">
				<div className="container__NavList-title">
					<h2>List</h2>
					<span>@usuario</span>
				</div>
				<div>
					<SettingsMenu/>
				</div>
				<div>
					<SettingsMenu/>
				</div>      
			</section>
		</div>
	)
}

export default NavList