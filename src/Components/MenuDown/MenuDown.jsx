import MenuDownItem from '../MenuDownItem/MenuDownItem'
import { ListOptionsMenuDown } from './ListMenuDown'

import CreateIcon from '@mui/icons-material/Create'

import './MenuDown.scss'
import MenuActiveProvider from '../../Context/menuActive'

const MenuDown = () => {
	return (
		<div className="menuDown__container">
			<nav>
				<MenuActiveProvider value={null}>
					<ul>
						<div className="container__items">
							{ListOptionsMenuDown?.map((option, index) => {
								return (
									<MenuDownItem key={index} option={option}/>
								)
							})}
						</div>
					</ul>
				</MenuActiveProvider>
			</nav>
			<div className="containet__btnTweetDown">
				<label type="button" className="btnTweetDown__icon"><CreateIcon fontSize='large'/></label>
			</div>
		</div>
	)
}

export default MenuDown
