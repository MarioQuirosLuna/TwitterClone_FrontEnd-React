import { useContext } from 'react'

import { MenuActiveContext } from '../../Context/menuActive'

import Layout from '../../Components/Layout/Layout'
import LayoutLogin from '../../Components/Layout/LayoutLogin'
import LayoutMessage from '../../Components/Layout/LayoutMessage'

import NewTweet from '../../shared/Components/NewTweet/NewTweet'
import PopUp from '../../shared/Components/PopUp/Popup'

const PageWrapper = ({ component: Component, isPage, isMessagePage, isLoginPage }) => {
	const menuContext = useContext(MenuActiveContext)

	return (
		<>
			{menuContext?.popUp &&
				<PopUp>
					<NewTweet />
				</PopUp>
			}
			{isPage &&
				<Layout>
					{Component}
				</Layout>
			}
			{isMessagePage &&
				<LayoutMessage>
					{Component}
				</LayoutMessage>
			}
			{isLoginPage &&
				<LayoutLogin>
					{Component}
				</LayoutLogin>
			}
		</>
	)

}

export default PageWrapper
