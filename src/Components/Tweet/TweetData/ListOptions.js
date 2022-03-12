import { deletePost } from '../../../Services/api'

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

const deleteTweet = async (username, id) => {
	await deletePost(username, id)
}

export const ListOptions = [
	{ icon: <DeleteForeverOutlinedIcon />, url: 'asd', action: deleteTweet, label: 'Delete' },
	{ icon: <PushPinOutlinedIcon />, url: 'asd', action: function () { }, label: 'Pin to you profile' },
	{ icon: <AddBoxOutlinedIcon />, url: 'asd', action: function () { }, label: 'Add/remove @User from Lists' },
	{ icon: <TextsmsOutlinedIcon />, url: 'asd', action: function () { }, label: 'Change who can reply' },
	{ icon: <CodeOutlinedIcon />, url: 'asd', action: function () { }, label: 'Embed Tweet' },
	{ icon: <BarChartOutlinedIcon />, url: 'asd', action: function () { }, label: 'View Tweet activity' },

]