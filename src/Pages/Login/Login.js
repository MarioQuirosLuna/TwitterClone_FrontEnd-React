import { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { AppContext } from '../../Context/AppContext'
import { logInUser, verificationAccount } from '../../Services/api'

import TwitterIcon from '@mui/icons-material/Twitter'
import CloseIcon from '@mui/icons-material/Close'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

import './Login.scss'

const Login = () => {

	const appContext = useContext(AppContext)

	const [dataInput, setDataInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [login, setLogin] = useState(false)
	const [response, setResponse] = useState('')

	const handleChangeInput = (e) => {
		setDataInput(e.target.value)
	}
	const verificationExistsAccount = async () => {
		if (dataInput !== '') {
			let response = await verificationAccount({
				username: `@${dataInput}`,
				email: dataInput,
				phone: dataInput
			})
			if (response !== false) {
				setLogin(true)
				setResponse(response)
			}
		}
	}

	const handleChangePassword = (e) => {
		setPasswordInput(e.target.value)
	}

	/** Need refactor */
	const handleLogInUser = async () => {
		// if (passwordInput !== '') {
		// appContext.setUser(await logInUser({
		// 	username: `@${dataInput}`,
		// 	email: '',
		// 	phone: ''
		// }))
		localStorage.setItem('userTwitterClone', `@${dataInput}`)
		window.location.href = '/home'
		// }
	}

	return (
		<div className="login_container">
			<div className="login">
				<div className="login_up_container">
					<div className="login_exit">
						<i>
							<CloseIcon />
						</i>
					</div>
					<div className="login_icon_twitter">
						<TwitterIcon fontSize="large" />
					</div>
				</div>
				{!login &&
					<div className="login_body_container">
						<div className="login_title">
							<span className="login_span_title">Log in to Twitter</span>
						</div>
						<div className="login_with_container">
							<div className="login_with">
								<label type="button" className="login_with_button">
									<GoogleIcon />
									<p className="login_with_tittle">Log in with Google</p>
								</label>
							</div>
						</div>
						<div className="login_with_container">
							<div className="login_with">
								<label type="button" className="login_with_button">
									<AppleIcon />
									<p className="login_with_tittle bold">Log in with Apple</p>
								</label>
							</div>
						</div>
						<div className="login_divider">
							<div className="divider"><h1 className="lines_effect">Or</h1></div>
						</div>
						<div className="login_enter_mail">
							<label className={`login_info ${dataInput !== '' ? 'show' : 'hide'}`}>
								<span className="login_span_info">Phone, email or username</span>
							</label>
							<input type="text"
								className="enter_login_info"
								value={dataInput}
								onChange={(e) => handleChangeInput(e)}
								placeholder="       Phone, email or username"
								required
							/>
						</div>
						<div className="login_button_next">
							<label type="button" className="next_button" onClick={() => verificationExistsAccount()}>
								<span className="next_span">Next</span>
							</label>
						</div>
						<div className="login_button_forget">
							<label type="button" className="login_forget_button">
								<span className="lofin_forgett_message">Did you forget your password?</span>
							</label>
						</div>
						<div className="login_signup">
							<span className="login_message">You do not have an account?</span>
							<span className="login_link">Sign up</span>
						</div>
					</div>
				}
				{login &&
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
				}
			</div>
		</div>
	)
}

export default Login