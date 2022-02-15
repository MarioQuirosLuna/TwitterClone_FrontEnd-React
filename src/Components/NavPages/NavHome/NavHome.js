import { useContext } from 'react'

import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'
import NewTweet from '../../../shared/Components/NewTweet/NewTweet'

import { AppContext } from '../../../Context/AppContext'

import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined'

import './NavHome.scss'

const NavHome = () => {
	const appContext = useContext(AppContext)

	return (
		<div className="container__navHome">
			<section className="header__navHome">
				<div className="headerNavHome__Photo">
					<div className="headerNavHome__Photo-user">
						{appContext?.user &&
							<PhotoUser url={appContext?.user.user_photo} size='32' />
						}
					</div>
					<div>
						<h2>Home</h2>
					</div>
				</div>
				<div className="stars">
					<i>
						<StarRateOutlinedIcon />
					</i>
				</div>
			</section>
			<NewTweet placeholder="What's happening?" />
		</div>
	)
}

export default NavHome
