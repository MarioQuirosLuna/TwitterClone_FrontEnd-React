import './NavMessage.scss'

import SettingsIcon from '@mui/icons-material/Settings'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import SearchIcon from '@mui/icons-material/Search'

const NavMessage=()=>{
	return(
		<div className="containerMessage">
			<section className="containerMessage_header">
				<div>
					<h2>Messages</h2>
				</div>
				<div className="containerMessage_icons">
					<div>
						<SettingsIcon/>
					</div>
					<div>
						<MailOutlineIcon/>
					</div>
				</div>
			</section>
			<section className="containerMessage_search">
				<div>
					<input type="text" Placeholder="Search for people and groups"></input>
					<label><SearchIcon/></label>
				</div>
			</section>
		</div>
	)
}

export default NavMessage