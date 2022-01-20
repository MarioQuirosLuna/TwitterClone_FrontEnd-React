import {useContext} from 'react'
import MessageContext from '../../Contexts/contextMessage'
import MessageProfile from '../MessageProfile/MessageProfile'
import './InsideMessage.scss'


const Trends = () => {
	const {userMessage}=useContext(MessageContext)
	return (
		<div className="insideMessage__container">
			<div>
				<MessageProfile post={userMessage[0]}/>
				<div className="message__messageList">
					{userMessage[0].chat.messages?.map((message, id) => {
						return <div>
							{message.text}{message.sendTime}
						</div>
					})}
				</div>
			</div>
		</div>
	)
}

export default Trends
