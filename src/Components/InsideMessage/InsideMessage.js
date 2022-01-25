import {useContext} from 'react'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import MessageContext from '../../Contexts/contextMessage'
import MessageProfile from '../MessageProfile/MessageProfile'
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import './InsideMessage.scss'


const Trends = () => {
	const {userMessage}=useContext(MessageContext)
	return (
		<div className="insideMessage__container">
			<div>
				<MessageProfile post={userMessage[0]}/>
				<div className="container__messageList">
					{userMessage[0].chat.messages?.map((message, id) => {
						return <div>
							<div className="messageList__photo-text">
								<div className="messageList__photo">
									<PhotoUser url={userMessage[0].user_photo} size="40"/>
								</div>
								<div className="messageList__text">
									{message.text}
								</div>
							</div>
							<div className="messageList__sendTime">
								{message.sendTime}
							</div>
						</div>
					})}
				</div>
				<div className="container__writeMessage">
					<label><BrokenImageOutlinedIcon/></label>
					<label><GifBoxOutlinedIcon/></label>
					<div className="writeMessage__input">
						<input type="text" placeholder="Start a new message"></input>
						<label><SentimentSatisfiedOutlinedIcon/></label>
					</div>
					<label><SendOutlinedIcon/></label>
				</div>
			</div>
		</div>
	)
}

export default Trends
