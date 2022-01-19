import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'

import './NavProfile.scss'

const NavProfile = ({
	user: {
		user_photo,
		image_background,
		name,
		username,
		description,
		joined_date,
		count_tweets,
		following,
		followers
	}
}) => {
	return (
		<div className="container__navProfile">
			<section className="header__navProfile">
				<div>
					<ArrowBackOutlinedIcon />
				</div>
				<div>
					<h2>{name}</h2>
					<span>{count_tweets} Tweets</span>
				</div>
			</section>
			<section className="main__navProfile">
				<div className="main__navProfile-bgImage">
					<img src={image_background} alt="background img" width="600" />
				</div>
				<div className='main__navProfile-imgUser'>
					<div className='photo__profile'>
						<PhotoUser url={undefined} size='133' />
					</div>
				</div>
				<div className='btn_editProfile'>
					Edit Profile
				</div>
				<div className="main__dataProfile">
					<div className='main__dataProfile-User'>
						<h2>{name}</h2>
						<span>{username}</span>
					</div>
					<div>
						{description}
					</div>
					<span>Translate bio</span>
					<div>
						<EventNoteOutlinedIcon />
						<span>Joined {joined_date}</span>
					</div>
					<div>
						<div>
							<span>{following}</span><span>Following</span>
						</div>
						<div>
							<span>{followers}</span><span>Followers</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NavProfile
