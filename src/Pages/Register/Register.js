import { useState } from 'react'
import { Link } from 'react-router-dom'

import { signUpUser } from '../../Services/api'


import './Register.scss'
import ViewStep2 from './partials/View_Step2'
import ViewStep1and3 from './partials/View_Step1and3'


const Register = () => {

	const [step, setStep] = useState(1)

	const [user_name, setUser_name] = useState('')
	const [user_email, setUser_email] = useState('')
	const [user_phone, setUser_phone] = useState('')
	const [user_password, setUser_password] = useState('')
	const [user_birthday, setUser_birthday] = useState({
		month: '',
		day: '',
		year: ''
	})



	const validation = () => {
		if (user_name === '' || user_email === '' || user_birthday.month === '' || user_birthday.day === '' || user_birthday.year === '') {
			return false
		}
		return true
	}

	const handleStep = async () => {
		if (step < 3) {
			if (validation()) {
				setStep(step + 1)
			}
		} else {
			await signUpUser({
				user_name,
				user_email,
				user_phone,
				user_password,
				user_birthday: `${user_birthday.day}/${user_birthday.month}/${user_birthday.year}`
			})
		}
	}

	const handleGoBack = () => {
		setStep(step - 1)
	}

	return (
		<div className="register__container">
			<div className="register__content">
				{(step === 1 || step === 3) &&
					<ViewStep1and3
						step={step}
						user_name={user_name}
						setUser_name={setUser_name}
						user_email={user_email}
						setUser_email={setUser_email}
						user_phone={user_phone}
						setUser_phone={setUser_phone}
						user_password={user_password}
						setUser_password={setUser_password}
						user_birthday={user_birthday}
						setUser_birthday={setUser_birthday}
						handleGoBack={handleGoBack}
					/>
				}
				{step === 2 &&
					<ViewStep2 handleGoBack={handleGoBack} />
				}
				<div className="content__nextButton">
					<Link to={step === 3 ? '/' : ''}>
						<input type="button" value={step !== 3 ? 'Next' : 'Sign Up'} onClick={() => handleStep()} className="nextButton"></input>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Register