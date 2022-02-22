import { useContext } from 'react'

import MenuItem from './MenuItem/MenuItem'
import { ListOptionsMenu } from './ListOptions'

import { MenuActiveContext } from '../../../Context/menuActive'
import { disableScroll } from '../../../Hooks/useScroll'

import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'

import TwitterIcon from '@mui/icons-material/Twitter'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import CreateIcon from '@mui/icons-material/Create'

import './Menu.scss'

const Menu = () => {
	const menuContext = useContext(MenuActiveContext)

	const OpenPopUp = () => {
		menuContext?.setPopUp(true)
		disableScroll()
	}

	return (
		<div className="menu__container">
			<nav className="container__nav">
				<label className="container__twittericon"><TwitterIcon fontSize='large' /></label>
				<ul>
					{ListOptionsMenu?.map((option, index) => {
						return (
							<label className={option.label} key={index}>
								<MenuItem option={option} />
							</label>
						)
					})}
				</ul>
			</nav>
			<div className="container__btnTweet">
				<label type="button" className="btnTweet__tweet" onClick={() => OpenPopUp()}>Tweet</label>
				<label type="button" className="btnTweet__icon" onClick={() => OpenPopUp()}><CreateIcon /></label>
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
