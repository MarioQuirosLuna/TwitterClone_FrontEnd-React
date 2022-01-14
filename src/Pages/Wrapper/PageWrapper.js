import Layout from '../../Components/Layout/Layout'
import LayoutMessage from '../../Components/Layout/LayoutMessage'

const PageWrapper = ({ component: Component, isMessagePage }) => {
	return (
		<>{isMessagePage ? 
			<LayoutMessage>
				{Component}
			</LayoutMessage> 
			:
			<Layout>
				{Component}
			</Layout>
		}</>
	)
}

export default PageWrapper
