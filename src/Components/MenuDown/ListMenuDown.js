import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import EmailIcon from '@mui/icons-material/Email'

export const ListOptionsMenuDown = [
	{ icon: <HomeOutlinedIcon fontSize='large'/>, icon2: <HomeIcon fontSize='large'/>, url: '/home', label: 'Home'},
	{ icon: <SearchIcon fontSize='large'/>, icon2: <SearchIcon fontSize='large'/>, url: '/explore', label: 'Explore'},
	{ icon: <NotificationsOutlinedIcon fontSize='large'/>, icon2: <NotificationsIcon fontSize='large'/>, url: '/notifications', label: 'Notifications'},
	{ icon: <EmailOutlinedIcon fontSize='large'/>, icon2: <EmailIcon fontSize='large'/>, url: '/Message', label: 'Messages'},
]