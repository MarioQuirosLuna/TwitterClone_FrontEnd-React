import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeIcon from '@mui/icons-material/Home'
import TagOutlinedIcon from '@mui/icons-material/TagOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import EmailIcon from '@mui/icons-material/Email'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import ArticleIcon from '@mui/icons-material/Article'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import PersonIcon from '@mui/icons-material/Person'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

export const ListOptionsMenu = [
	{ icon: <HomeOutlinedIcon fontSize='large'/>, icon2: <HomeIcon fontSize='large'/>, url: '/home', label: 'Home'},
	{ icon: <TagOutlinedIcon fontSize='large'/>, icon2: <TagOutlinedIcon fontSize='large'/>, url: '/explore', label: 'Explore'},
	{ icon: <NotificationsOutlinedIcon fontSize='large'/>, icon2: <NotificationsIcon fontSize='large'/>, url: '/notifications', label: 'Notifications'},
	{ icon: <EmailOutlinedIcon fontSize='large'/>, icon2: <EmailIcon fontSize='large'/>, url: '/Message', label: 'Messages'},
	{ icon: <BookmarkBorderOutlinedIcon fontSize='large'/>, icon2: <BookmarkIcon fontSize='large'/>, url: '/bookmarks', label: 'Bookmarks'},
	{ icon: <ArticleOutlinedIcon fontSize='large'/>, icon2: <ArticleIcon fontSize='large'/>, url: '/list', label: 'List'},
	{ icon: <PermIdentityOutlinedIcon fontSize='large'/>, icon2: <PersonIcon fontSize='large'/>, url: '/profile', label: 'Profile'},
	{ icon: <MoreHorizOutlinedIcon fontSize='large'/>, icon2: <MoreHorizOutlinedIcon fontSize='large'/>, url: '/more', label: 'More'}
]