import './BtnTwitter.scss'

const BtnTwitter = ({ label='BtnLabel' }) => {
	return (
		<div className="container__btnTwitter">
			<div>
				<span>{label}</span>
			</div>
		</div>
	)
}

export default BtnTwitter
