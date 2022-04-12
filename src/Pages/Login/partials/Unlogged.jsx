import { verificationAccount } from '../../../Services/api'

import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

const Unlogged = ({
	dataInput,
	setDataInput,
	setLogin,
	setResponse
}) => {

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

	return (
		<div className="login_body_container">
			<div className="login_title">
				<span className="login_span_title">Log in to TwitterClone</span>
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
	)
}

export default Unlogged