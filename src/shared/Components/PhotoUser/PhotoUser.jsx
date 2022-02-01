import './PhotoUser.scss'

const PhotoUser = ({ url, size = '48' }) => {
	return (
		<div className="photo__user-container">
			{(url && url !== '') ?
				<img src={url} alt="PhotoUser" width={size} height={size} />
				:
				<img src={'https://www.computerhope.com/jargon/g/guest-user.jpg'} alt="PhotoUser" width={size} height={size} />
			}
		</div>
	)
}

export default PhotoUser
