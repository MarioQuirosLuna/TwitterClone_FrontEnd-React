import MenuItem from '../MenuItem/MenuItem'
import { ListOptionsMenu } from './ListOptions'

import TwitterIcon from '@mui/icons-material/Twitter'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CreateIcon from '@mui/icons-material/Create'

import './Menu.scss'
import MenuActiveProvider from '../../Contexts/menuActive'

const Menu = () => {
	return (
		<div className="menu__container">
			<nav className="container__nav">
				<label className="container__twittericon"><TwitterIcon fontSize='large' /></label>
				<MenuActiveProvider value={null}>
					<ul>
						{ListOptionsMenu?.map((option, index) => {
							return (
								<label className={option.label} key={index}>
									<MenuItem option={option} />
								</label>
							)
						})}
					</ul>
				</MenuActiveProvider>
			</nav>
			<div className="container__btnTweet">
				<label type="button" className="btnTweet__tweet">Tweet</label>
				<label type="button" className="btnTweet__icon"><CreateIcon /></label>
			</div>
			<div className="container__profile">
				<PhotoUser url={undefined} size="40" />
				<div className="pofile_name-moreicon">
					<div className="profile__name">
						<label>User Name Logged</label>
						<div><label className="profile__name-username">@username</label></div>
					</div>
					<div className="profile__moreicon"><MoreHorizOutlinedIcon /></div>
				</div>
			</div>
		</div>
	)
}

export default Menu
