import { useContext } from 'react'

import { AppContext } from '../../../Context/AppContext'

import useILikeThis from '../../../Hooks/useILikeThis'
import { getAllPost, newLike } from '../../../Services/api'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'

import './BtnLike.scss'

const BtnLike = ({ likes, id, showDetail }) => {

	const appContext = useContext(AppContext)

	const handleSubmitNewLike = async (e) => {
		e.preventDefault()
		try {
			const Like = {
				'userLiked': appContext?.user?.username
			}
			await newLike(appContext?.user?.username, id, Like)
			appContext?.setPosts(await getAllPost())
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="BtnLike__container">
			<div className="option like" onClick={handleSubmitNewLike}>
				{useILikeThis(likes) ?
					<i className="active">
						<FavoriteIcon />
					</i>
					:
					<i>
						<FavoriteBorderOutlinedIcon />
					</i>
				}
				{showDetail && <span>{likes?.length}</span>}
			</div>
		</div>
	)
}

export default BtnLike