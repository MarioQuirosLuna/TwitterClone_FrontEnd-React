import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import './MessageProfile.scss'

const MessageProfile = ({ 
	post: {
		user_photo,
		name,
		username,
	    chat:{
			bio,
			following,
			followers,
			joined
		}
	} 
}) => {
	return (
		<div className="MessageProfile__container">
			<div className="MessageProfile__container-firstinfo">
				<div className="MessageProfile__photo-name">
					<div className="MessageProfile__photo">
						<PhotoUser url={user_photo} size="20"/>
					</div>
					<div className="MessageProfile__name">
						<span className="MessageProfile__data-name">{name}</span>
						<div className="MessageProfile__username">
							<span className="MessageProfile__data-username">{username}</span>
						</div>
					</div>
				</div>
				<label><InfoOutlinedIcon/></label>
			</div>
			<div className="MessageProfile__content">
				<div className="content__name-username">
					<div className="name-username__data">
					    <span className="name-username__data-name">{name}</span>
					    <span className="name-username__data-username">{username}</span>
					</div>
				</div>
				<div className="content__bio">
				    <span className="bio__data-bio">{bio}</span>
				</div>
				<div className="content__following-followers">
				    <span className="following-followers__data-following">{following}</span>
					<label className="following__label">Followings</label>
				    <span className="following-followers__data-followers">{followers}</span>
					<label className="followers__label">Followers</label>
				</div>
				<div className="content__joined">
					<DateRangeOutlinedIcon/>
				    <span className="joined__data-joined">{joined}</span>
				</div>
			</div>
		</div>
	)
}

export default MessageProfile