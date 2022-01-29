import './PhotoUser.scss'

const PhotoUser = ({ url = 'https://www.computerhope.com/jargon/g/guest-user.jpg', size = '48' }) => {
	return (
		<div className="photo__user-container">
			{url ?
				<img src={url} alt="PhotoUser" width={size} height={size} />
				:
				<div>Photo</div>
			}
		</div>
	)
}

export default PhotoUser
