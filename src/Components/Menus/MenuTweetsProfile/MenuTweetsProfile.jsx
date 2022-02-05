import ItemMenuTweetsProfile from './ItemMenuTweetsProfile/ItemMenuTweetsProfile'
import { ListOptionsMenu } from './ListOptions'

import './MenuTweetsProfile.scss'

const MenuTweetsProfile = () => {
	return (
		<div className="menuTweetsProfile__container">
			{ListOptionsMenu?.map((option, index) => {
				return (
					<ItemMenuTweetsProfile key={index} option={option} />
				)
			})}
		</div>
	)
}

export default MenuTweetsProfile
