import Layout from '../../Components/Layout/Layout'
import LayoutMessage from '../../Components/Layout/LayoutMessage'

const PageWrapper = ({ component: Component, isPage, isMessagePage, isLoginPage }) => {
	return (
		<>
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
		</>
	)
}

export default PageWrapper
