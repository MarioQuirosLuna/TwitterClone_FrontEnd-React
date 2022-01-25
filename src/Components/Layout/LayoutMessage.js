import Menu from '../Menu/Menu'
import InsideMessage from '../InsideMessage/InsideMessage'

import './LayoutMessage.scss'
import { MessageProvider } from '../../Contexts/contextMessage'

const messages = [
	{
		'id': '1',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject01',
		'time': '10m',
		'text': 'Hello World',
		'chat':{
			'bio': 'Hello Twitter',
			'joined': '1 January 2022',
			'following': 100,
			'followers': 12,
			'messages':[
				{
					'username': '@test_subject01',
					'text': 'Hello World',
					'sendTime': '11:00AM',
				}
			]
		}
	},
	{
		'id': '2',
		'user_photo': undefined,
		'name': 'Test Subject',
		'username': '@test_subject02',
		'time': '11m',
		'text': 'Hello World',
		'chat':{
			'bio': 'Hello Twitter',
			'joined': '1 January 2022',
			'following': 100,
			'followers': 12,
			'messages':[
				{
					'username': '@test_subject02',
					'text': 'Hello World',
					'sendTime': '11:00AM',
				}
			]
		}
	}
]

const LayoutMessage = ({ children }) => {
	return (
		<div className="LayoutMessage__container">
			<div className="containerMessage__content">
				<div className="container__menu">
					<Menu />
				</div>
				<div className="content__main">
					<MessageProvider value={{userMessage:messages}}>
						<section className="Content__page">
							{children}
						</section>
						<div className="content__insideMessage">
							<InsideMessage />
						</div>
					</MessageProvider>
				</div>

			</div>
		</div>
	)
}

export default LayoutMessage
