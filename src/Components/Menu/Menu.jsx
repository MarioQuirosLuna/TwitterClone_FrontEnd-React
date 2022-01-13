import MenuItem from '../MenuItem/MenuItem'
import { ListOptionsMenu } from './ListOptions'

import TwitterIcon from '@mui/icons-material/Twitter'

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
		</div>
	)
}

export default Menu
