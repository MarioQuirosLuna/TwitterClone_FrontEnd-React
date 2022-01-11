import ImagePosted from '../../shared/Components/ImagePosted/ImagePosted'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'

import './TweetPost.scss'

const TweetPost = ({ 
	post: {
		id,
		user_photo,
		name,
		username,
		time,
		text_posted,
		media_posted
	} 
}) => {
	console.log(name)
	return (
		<div className="tweet__container">
			<div className="tweet__container-photo">
				<PhotoUser url={user_photo}/>
			</div>
			<div className="tweet__container-content">
				<div className="content__nav">
					<div className="content__nav-data">
						<span className="nav__data-name">{name}</span>
						<span className="nav__data-username">{username}</span>
						<span className="nav__data-time">· {time}</span>
					</div>
					<div className="content__nav-settings">
                        ···
					</div>
				</div>
				<div className="content__text">
					{text_posted}
				</div>
				<div className="content__media">
					{media_posted && <ImagePosted url={media_posted}/>}
				</div>
				<div className="content__options">
					<div>
                        comment
					</div>
					<div>
                        retweet
					</div>
					<div>
                        like
					</div>
					<div>
                        shared
					</div>
				</div>
			</div>
		</div>
	)
}

export default TweetPost
