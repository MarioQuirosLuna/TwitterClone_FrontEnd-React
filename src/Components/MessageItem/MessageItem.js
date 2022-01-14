import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import './MessageItem.scss'

const Message = ({ 
	post: {
		id,
		user_photo,
		name,
		username,
		time,
		text
	} 
}) => {
	return (
		<div className="Message__container">
			<div className="Message__container-photo">
				<PhotoUser url={user_photo}/>
			</div>
			<div className="Message__container-content">
				<div className="content__head">
					<div className="content__head-data">
						<span className="head__data-name">{name}</span>
						<span className="head__data-username">{username}</span>
						<span className="head__data-time">{time}</span>
					</div>
				</div>
				<div className="content__text">
					{text}
				</div>
			</div>
		</div>
	)
}

export default Message