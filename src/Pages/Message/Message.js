import NavMessage from '../../Components/NavMessage/NavMessage'
import MessageItem from '../../Components/MessageItem/MessageItem'
import './Message.scss'

const messages = [
	{
		'id': '1',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject01',
		'time': '10m',
		'text': 'Hello World'
	},
	{
		'id': '2',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject02',
		'time': '11m',
		'text': 'Hello World'
	},
	{
		'id': '3',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject03',
		'time': '12m',
		'text': 'Hello World'
	},
	{
		'id': '4',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject04',
		'time': '13m',
		'text': 'Hello World'
	}
]

const Message = () => {
	return (
		<section className="message__container">
			<NavMessage/>
			<div className="home__tweetsList">
				{messages?.map((post, id) => {
					return <MessageItem key={id} post={post}/>
				})}
			</div>
		</section>
	)
}

export default Message
