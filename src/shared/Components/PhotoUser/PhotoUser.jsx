import './PhotoUser.scss'

const PhotoUser = ({ url='https://www.computerhope.com/jargon/g/guest-user.jpg' }) => {
	return (
		<div className="photo__user-container">
			<img src={url} alt="PhotoUser" width="48" />
		</div>
	)
}

export default PhotoUser
