import './ItemMenuTweetsProfile.scss'

const ItemMenuTweetsProfile = ({
	option: {
		label
	}
}) => {
	return (
		<div className="itemMenuTweetsProfile__container">
			<span>
				{label}
			</span>
		</div>
	)
}

export default ItemMenuTweetsProfile
