import Layout from '../../Components/Layout/Layout'

const PageWrapper = ({ component: Component }) => {
	return (
		<Layout>
			{Component}
		</Layout>
	)
}

export default PageWrapper
