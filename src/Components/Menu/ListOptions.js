import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import TagOutlinedIcon from '@mui/icons-material/TagOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

export const ListOptionsMenu = [
	{ icon: <HomeOutlinedIcon fontSize='large'/>, url: '/home', label: 'Home'},
	{ icon: <TagOutlinedIcon fontSize='large'/>, url: '/explore', label: 'Explore'},
	{ icon: <NotificationsOutlinedIcon fontSize='large'/>, url: '/notifications', label: 'Notifications'},
	{ icon: <EmailOutlinedIcon fontSize='large'/>, url: '/Message', label: 'Messages'},
	{ icon: <BookmarkBorderOutlinedIcon fontSize='large'/>, url: '/bookmarks', label: 'Bookmarks'},
	{ icon: <ArticleOutlinedIcon fontSize='large'/>, url: '/list', label: 'List'},
	{ icon: <PermIdentityOutlinedIcon fontSize='large'/>, url: '/profile', label: 'Profile'},
	{ icon: <MoreHorizOutlinedIcon fontSize='large'/>, url: '/more', label: 'More'}
]