import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const useILikeThis = (likes) => {
	const appContext = useContext(AppContext)
	if (likes) {
		return likes.find(like => like.username === appContext?.user?.username)
	}
}

export default useILikeThis