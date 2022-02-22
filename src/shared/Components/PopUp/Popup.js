import { useContext } from 'react'

import { MenuActiveContext } from '../../../Context/menuActive'
import { enableScroll } from '../../../Hooks/useScroll'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

import './PopUp.scss'

const PopUp = ({ children }) => {
	const menuContext = useContext(MenuActiveContext)

	const ClosePopUp = () => {
		menuContext?.setPopUp(false)
		enableScroll()
	}

	return (
		<div className="PopUp__container">
			<div className="PopUp__content">
				<div className="icon" onClick={() => ClosePopUp()}>
					<i>
						<CloseOutlinedIcon />
					</i>
				</div>
				<div className="children__PopUp">
					{children}
				</div>
			</div>
		</div>
	)
}

export default PopUp