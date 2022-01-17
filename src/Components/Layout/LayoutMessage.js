import Menu from '../Menu/Menu'
import InsideMessage from '../InsideMessage/InsideMessage'

import './LayoutMessage.scss'

const LayoutMessage = ({ children }) => {
	return (
		<div className="LayoutMessage__container">
			<div className="containerMessage__content">
				<div className="container__menu">
					<Menu />
				</div>
				<div className="content__main">
					<section className="Content__page">
						{children}
					</section>
					<div className="content__insideMessage">
						<InsideMessage />
					</div>
				</div>

			</div>
		</div>
	)
}

export default LayoutMessage
