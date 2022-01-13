import './ImagePosted.scss'

const ImagePosted = ({ url }) => {
	return (
		<div className="ImagePosted__container">
			<img src={url} alt="Default img" />
		</div>
	)
}

export default ImagePosted
