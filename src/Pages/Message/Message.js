import NavMessage from '../../Components/NavPages/NavMessage/NavMessage'
import MessageItem from '../../Components/MessageItem/MessageItem'
import { useContext } from 'react'
import MessageContext from '../../Context/contextMessage'
import './Message.scss'

const Message = () => {
	const { userMessage } = useContext(MessageContext)
	return (
		<section className="message__container">
			<NavMessage />
			<div className="message__messageList">
				{userMessage?.map((post, id) => {
					return <MessageItem key={id} post={post} />
				})}
			</div>
		</section>
	)
}

export default Message
