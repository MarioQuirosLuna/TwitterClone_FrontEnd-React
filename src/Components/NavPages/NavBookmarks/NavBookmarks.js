import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import './NavBookmarks.scss'

const NavBookmarks=()=>{
	return(
		<div className="containerBookmarks">
			<section className="containerBookmarks_header">
				<div className="header__top">
					<h2>Bookmarks</h2>
					<label>@username</label>
				</div>
				<div className="containerBookmarks_icons">
					<MoreHorizIcon/>
				</div>
			</section>
		</div>
	)
}

export default NavBookmarks