import { Link } from 'react-router-dom'

const MenuItem = ({
	option: { 
		icon,
		url,
		label
	}
}) => {
	return (
		<>
			<Link to={url}>
				<div>
					{icon}
					<span>{label}</span>
				</div>
			</Link>
		</>
	)
}

export default MenuItem
