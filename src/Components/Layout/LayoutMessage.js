import Menu from '../Menu/Menu'

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
				</div>
			</div>
		</div>
	)
}

export default LayoutMessage
