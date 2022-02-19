import './Login.scss'
import TwitterIcon from '@mui/icons-material/Twitter'
import CloseIcon from '@mui/icons-material/Close'

const Login = () => {
	return (
		<div className="login_container">
			<div className="login">
				<div className="login_up_container">
					<div className="login_exit">
						<label type="button" className="exit_button"><CloseIcon/></label>
					</div>
					<div className="login_icon_twitter">
						<TwitterIcon fontSize="large"/>
					</div>
				</div>
				<div className="login_body_container">
					<div className="login_title">
						<span className="login_span_title">Log in to Twitter</span>
					</div>
					<div className="login_with_goolge_container">
						<div className="login_with_google">
							<label type="button" className="login_with_google_button"><p className="login_with_google_tittle">Log in with Google</p></label>
						</div>
					</div>
					<div className="login_with_apple_container">
						<div className="login_with_apple">
							<label type="button" className="login_with_apple_button"><p className="login_with_apple_tittle">Log in with Apple</p></label>
						</div>
					</div>
					<div className="login_divider">
						<div className="divider"><h1 className="lines_effect">O</h1></div>
					</div>
					<div className="login_enter_mail">
						<input type="text" className="enter_login_info" required />
						<label className="login_info"><span className="login_span_info">Phone, email or username</span></label>
					</div>
					<div className="login_button_next">
						<label type="button" className="next_button"><span className="next_span">Next</span></label>
					</div>
					<div className="login_button_forget">
						<label type="button" className="login_forget_button"><span className="lofin_forgett_message">Did you forget your password?</span></label>
					</div>
					<div className="login_signup">
						<span className="login_message">You do not have an account?</span>
						<span className="login_link">Sign up</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login