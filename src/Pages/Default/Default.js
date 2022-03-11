import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

import './Default.scss'

const Default = () => {
	return (
		<div className="default__containerPage">
			<div className="default__menuInitial">
				<div>
					<div className="icon">
						<i>
							<TwitterIcon fontSize="large" />
						</i>
					</div>
					<div className="text">
						<p className="big">
							What is happening now
						</p>
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
						<span className="option phoneEmail">
							Sign up with phone number or email
						</span>
						<div className="message__cookies">
							By signing up, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.
						</div>
					</div>
					<div className="logIn">
						<div className="message__title">
							Do you already have an account?
						</div>
						<div className="login__option">
							Log in
						</div>
					</div>
				</div>
			</div>
			<div className="default__imageInitial">
				<div>
					<img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="bg tweeter initial Page" />
				</div>
			</div>
		</div>
	)
}

export default Default