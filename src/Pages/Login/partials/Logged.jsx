import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'

const Logged = ({
	passwordInput,
	handleChangePassword,
	response,
	handleLogInUser
}) => {
	return (
		<div className="login_enterPasswordContainer">
			<div>
				<div className="login_data">
					<div className="login_title">
						Enter your password
					</div>
					<section >
						<span>
							User
						</span>
						<div>
							{response.data}
						</div>
					</section>
					<section>
						<span>
							Password
						</span>
						<div>
							<input type="password"
								value={passwordInput}
								onChange={(e) => handleChangePassword(e)}
								required
							/>
							<RemoveRedEyeOutlinedIcon />
						</div>
					</section>
					<span className="forgetPassword">Did you forget your password?</span>
				</div>
				<div className="btn_LogIn" onClick={() => handleLogInUser()}>
					<span>Log In</span>
				</div>
				<div className="btn_sigUp">
					You do not have an account?
					<span>Sign up</span>
				</div>
			</div>
		</div>
	)
}

export default Logged