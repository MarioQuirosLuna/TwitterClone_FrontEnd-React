import Layout from '../../Components/Layout/Layout'
import LayoutLogin from '../../Components/Layout/LayoutLogin'

const PageWrapper = ({ component: Component, isPage, isMessagePage, isLoginPage }) => {
	return ( 
		<>
			{isPage && 
                <Layout>
                	{Component}
                </Layout>
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
