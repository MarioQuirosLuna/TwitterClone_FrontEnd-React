import { useState } from 'react'
import { logInUser } from '../../Services/api'

import Unlogged from './partials/Unlogged'
import Logged from './partials/Logged'

import TwitterIcon from '@mui/icons-material/Twitter'
import CloseIcon from '@mui/icons-material/Close'

import './Login.scss'

const Login = () => {
	const [dataInput, setDataInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [login, setLogin] = useState(false)
	const [response, setResponse] = useState('')

	const handleChangePassword = (e) => {
		setPasswordInput(e.target.value)
	}

	/** Need refactor */
	const handleLogInUser = async () => {
		if (passwordInput !== '') {
			let user = await logInUser({
				username: `@${dataInput}`,
				email: '',
				phone: '',
				password: passwordInput
			})
			if (user) {
				localStorage.setItem('userTwitterClone', user.username)
				window.location.href = '/home'
			}
		}
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
					<Unlogged
						dataInput={dataInput}
						setDataInput={setDataInput}
						setLogin={setLogin}
						setResponse={setResponse}
					/>
				}
				{login &&
					<Logged
						passwordInput={passwordInput}
						handleChangePassword={handleChangePassword}
						response={response}
						handleLogInUser={handleLogInUser}
					/>
				}
			</div>
		</div>
	)
}
export default Login