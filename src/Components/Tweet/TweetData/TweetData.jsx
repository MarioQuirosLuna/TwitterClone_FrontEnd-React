import ImagePosted from '../../../shared/Components/ImagePosted/ImagePosted'
import SettingsMenu from '../../../shared/Components/SettingsMenu/SettingsMenu'

import useGetPostTime from '../../../Hooks/useGetPostTime'

const TweetData = ({
	post: {
		nameUser,
		username,
		postTime,
		text_posted,
		media_posted
	}
}) => {
	return (
		<>
			<div className="content__nav">
				<div className="content__nav-data">
					<span className="nav__data-name">{nameUser}</span>
					<span className="nav__data-username">{username}</span>
					<span className="nav__data-time">· {useGetPostTime(postTime)}</span>
				</div>
				<div className="content__nav-settings">
					<SettingsMenu />
				</div>
			</div>
			<div className="content__text">
				{text_posted}
			</div>
			<div className="content__media">
				{media_posted && <ImagePosted url={media_posted} />}
			</div>
		</>
	)
}

export default TweetData