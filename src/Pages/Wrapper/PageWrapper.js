import { useContext } from 'react'

import { MenuActiveContext } from '../../Context/menuActive'

import Layout from '../../Components/Layout/Layout'
import LayoutLogin from '../../Components/Layout/LayoutLogin'
import LayoutMessage from '../../Components/Layout/LayoutMessage'
import LayoutDefault from '../../Components/Layout/LayoutDefault'

import NewTweet from '../../shared/Components/NewTweet/NewTweet'
import PopUp from '../../shared/Components/PopUp/Popup'

const PageWrapper = ({
	component: Component,
	isPage,
	isMessagePage,
	isLoginPage,
	isDefaultPage
}) => {
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
			{isDefaultPage &&
				<LayoutDefault>
					{Component}
				</LayoutDefault>
			}
		</>
	)

}

export default PageWrapper
