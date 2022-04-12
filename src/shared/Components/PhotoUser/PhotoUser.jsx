import './PhotoUser.scss'

const PhotoUser = ({ url, size = '48' }) => {
	return (
		<div className="photo__user-container">
			{(url && url !== '') ?
				<img src={url} alt=" " width={size} height={size} loading='lazy' />
				:
				<img src={'https://www.computerhope.com/jargon/g/guest-user.jpg'} alt=" " width={size} height={size} loading='lazy' />
			}
		</div>
	)
}

export default PhotoUser
