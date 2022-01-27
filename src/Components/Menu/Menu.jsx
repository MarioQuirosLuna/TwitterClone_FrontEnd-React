import MenuItem from '../MenuItem/MenuItem'
import { ListOptionsMenu } from './ListOptions'

import TwitterIcon from '@mui/icons-material/Twitter'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

import './Menu.scss'

const Menu = () => {
	return (
		<div className="menu__container">
			<nav>
				<TwitterIcon />
				<ul>
					{ListOptionsMenu?.map((option, index) => {
						return (
							<MenuItem key={index} option={option}/>
						)
					})}
				</ul>
			</nav>
			<div className="container__btnTweet">
				<input type="button" value="Tweet"></input>
			</div>
			<div className="container__profile">
				<PhotoUser url={undefined} size="40"/>
				<div className="profile__name">
					<label>User Name Logged</label>
					<div><label className="profile__name-username">@username</label></div>
				</div>
				<div className="profile__moreicon"><MoreHorizOutlinedIcon/></div>
			</div>
		</div>
	)
}

export default Menu
