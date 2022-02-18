import { Link } from 'react-router-dom'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'

import './NavPostDetails.scss'

const NavPostDetails = () => {
	return (
		<section className="header__navTweet">
			<Link to={'/home'} className='link'>
				<div className="goBack">
					<i>
						<ArrowBackOutlinedIcon />
					</i>
				</div>
			</Link>
			<div>
				<h2>Tweet</h2>
			</div>
		</section>
	)
}

export default NavPostDetails
