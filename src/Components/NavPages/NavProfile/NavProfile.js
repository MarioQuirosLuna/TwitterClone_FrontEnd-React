import PhotoUser from '../../../shared/Components/PhotoUser/PhotoUser'
import TextBlue from '../../../shared/Components/TextBlue/TextBlue'

import useGetJoinedDate from '../../../Hooks/useGetJoinedDate'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'

import './NavProfile.scss'

const NavProfile = ({
	user: {
		user_photo,
		image_bg,
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
					<img src={image_bg} alt="background img" width="600" />
				</div>
				<div className='main__navProfile-imgUser'>
					<div className='photo__profile'>
						<PhotoUser url={user_photo} size='133' />
					</div>
				</div>
				<div className='btn__editProfile-container'>
					<div className='btn_editProfile-content'>
						<span>Edit Profile</span>
					</div>
				</div>
				<div className="main__dataProfile">
					<div className='main__dataProfile-User'>
						<h2>{name}</h2>
						<span>{username}</span>
					</div>
					<div className='main__dataProfile-description'>
						<div>
							{description}
						</div>
						<div className='translate_bioProfile'>
							<TextBlue label="Translate bio" />
						</div>
					</div>
					<div className='main__joinedDate'>
						<EventNoteOutlinedIcon />
						<span>Joined {useGetJoinedDate(joined_date)}</span>
					</div>
					<div className='main__followBtns'>
						<div>
							<span className='followBtn__number'>{following}</span>
							<span className='followBtn__text'>Following</span>
						</div>
						<div>
							<span className='followBtn__number'>{followers}</span>
							<span className='followBtn__text'>Followers</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NavProfile
