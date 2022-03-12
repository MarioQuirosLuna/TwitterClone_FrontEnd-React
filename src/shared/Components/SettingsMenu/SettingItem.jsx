
import { useContext } from 'react'

import { AppContext } from '../../../Context/AppContext'

import './SettingItem.scss'

const MenuItem = ({
	id,
	username,
	option: {
		icon,
		url,
		action,
		label
	},
	handleShowMenu
}) => {
	const appContext = useContext(AppContext)

	const refreshPost = async () => {
		appContext?.setPosts(await appContext?.posts.filter(post => post.id !== id))
	}

	const activeAction = (action) => {
		action(username, id)
		if (action.name === 'deleteTweet') {
			refreshPost()
		}
		handleShowMenu(false)
	}
	return (
		<li className="itemMenuTweet__container" onClick={() => activeAction(action)}>
			<div className="itemMenuTweet__Option" >
				<label className={`${label === 'Delete' ? 'delete' : ''}`}>{icon}</label>
				<span className={`${label === 'Delete' ? 'delete' : ''}`}>{label}</span>
			</div>
		</li>
	)
}

export default MenuItem