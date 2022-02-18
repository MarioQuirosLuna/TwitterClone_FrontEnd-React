import './TextBlue.scss'

const TextBlue = ({ label = 'label blue' }) => {
	return (
		<span className="textBlue__label">{label}</span>
	)
}

export default TextBlue
