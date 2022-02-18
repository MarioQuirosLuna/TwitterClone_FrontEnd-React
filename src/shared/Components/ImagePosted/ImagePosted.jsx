import './ImagePosted.scss'

const ImagePosted = ({ url }) => {
	return (
		<div className="ImagePosted__container">
			<img src={url} alt="Default img" width="500"/>
		</div>
	)
}

export default ImagePosted
