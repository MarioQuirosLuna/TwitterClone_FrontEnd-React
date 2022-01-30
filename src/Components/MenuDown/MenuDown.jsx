import MenuDownItem from '../MenuDownItem/MenuDownItem'
import { ListOptionsMenuDown } from './ListMenuDown'

import CreateIcon from '@mui/icons-material/Create'

import './MenuDown.scss'

const MenuDown = () => {
	return (
		<div className="menuDown__container">
			<nav>
				<ul>
					<div className="container__items">
						{ListOptionsMenuDown?.map((option, index) => {
							return (
								<MenuDownItem key={index} option={option}/>
							)
						})}
					</div>
				</ul>
			</nav>
		</div>
	)
}

export default MenuDown
