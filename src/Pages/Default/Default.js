import { Link } from 'react-router-dom'

import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

import './Default.scss'

const Default = () => {
	return (
		<div className="default__containerPage">
			<div className="default__complete">
				<div className="default__menuInitial">
					<div className="content">
						<div className="icon">
							<TwitterIcon fontSize="large" />
						</div>
						<div className="text">
							<span className="big">
								What is happening now
							</span>
							<p className="little">
								Join Twitter today.
							</p>
						</div>
						<div className="signUpOptions">
							<div className="option">
								<i><GoogleIcon /></i>
								<span>Sign up with Google</span>
							</div>
							<div className="option apple">
								<i><AppleIcon /></i>
								<span>Sign up with Apple</span>
							</div>
							<div className="sectionOr">
								<div></div>
								<div>
									<span>or</span>
								</div>
								<div></div>
							</div>
							<Link to={'/register'} className="option phoneEmail">
								<span>Sign up with phone number or email</span>
							</Link>
							<div className="message__cookies">
								By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including the <span>Use of Cookies policy</span>.
							</div>
						</div>
						<div className="logIn">
							<div className="message__title">
								Do you already have an account?
							</div>
							<Link to={'/login'} className="login__option">
								Log in
							</Link>
						</div>
					</div>
				</div>
				<div className="default__imageInitial">
					<div>
						<img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="bg tweeter initial Page" />
						<div></div>
					</div>
					<div className="logo">
						<TwitterIcon fontSize="large" />
					</div>
				</div>
			</div>
			<div className="navigation">
				<nav className="navBottom">
					<span>About</span>
					<span>Help center</span>
					<span>Terms of Service</span>
					<span>Privacy policies</span>
					<span>Cookies policy</span>
					<span>Accessibility</span>
					<span>Ad information</span>
					<span>Blog</span>
					<span>State</span>
					<span>Jobs</span>
					<span>Brand resources</span>
					<span>Advertising</span>
					<span>Marketing</span>
					<span>Twitter for business</span>
					<span>Developers</span>
					<span>Guide</span>
					<span>Setting</span>
					<span>&copy;{new Date().getFullYear()}</span>
				</nav>
			</div>
		</div>
	)
}

export default Default