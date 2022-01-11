import Menu from '../Menu/Menu'
import Trends from '../Trends/Trends'

import './Layout.scss'

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<div className="Container">
				<div className="container__menu">
					<Menu />
				</div>
				<div className="Content">
					<section className="Content__page">
						{children}
					</section>
					<div className="container__trends">
						<Trends />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout
