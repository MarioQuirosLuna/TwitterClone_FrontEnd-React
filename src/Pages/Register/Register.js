import { useState } from 'react'
import { Link } from 'react-router-dom'

import { signUpUser } from '../../Services/api'

import TwitterIcon from '@mui/icons-material/Twitter'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './Register.scss'


const Register = () => {

	const [step, setStep] = useState(1)

	const [user_name, setUser_name] = useState('')
	const [user_email, setUser_email] = useState('')
	// const [user_phone, setUser_phone] = useState('')
	const [user_birthday, setUser_birthday] = useState({
		month: '',
		day: '',
		year: ''
	})

	const handleChangeName = (e) => {
		setUser_name(e.target.value)
	}

	const handleChangeEmail = (e) => {
		setUser_email(e.target.value)
	}

	// const handleChangePhone = (e) => {
	// 	setUser_phone(e.target.value)
	// }

	const handleChangeMonth = (e) => {
		setUser_birthday({
			month: e.target.value,
			day: user_birthday.day,
			year: user_birthday.year
		})
	}
	const handleChangeDay = (e) => {
		setUser_birthday({
			month: user_birthday.month,
			day: e.target.value,
			year: user_birthday.year
		})
	}
	const handleChangeYear = (e) => {
		setUser_birthday({
			month: user_birthday.month,
			day: user_birthday.day,
			year: e.target.value
		})
	}

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
				// user_phone,
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
					<>
						<div className="content__registerTop">
							<div className="register__exit">
								{step === 1 &&
									<Link to={'/'} type="button" className="exit_button">
										<CloseIcon />
									</Link>
								}
								{step === 3 &&
									<div type="button" onClick={() => handleGoBack()} className="exit_button">
										<ArrowBackIcon /> <span>Step 3 of 3</span>
									</div>
								}
							</div>
							{step === 1 &&
								<div className="register__iconTwitter">
									<TwitterIcon fontSize="large" />
								</div>
							}
						</div>
						<div className="content__registerLabel">
							<label className="registerLabel">Create your account</label>
						</div>
						<div className="content__registerName">
							<input
								type="text"
								value={user_name}
								onChange={e => handleChangeName(e)}
								className="registerInput__name"
								placeholder="  Name"
								required>
							</input>
						</div>
						<div className="content__registerEmail">
							<input
								type="text"
								value={user_email}
								onChange={e => handleChangeEmail(e)}
								className="registerInput__email"
								placeholder="  Email"
								required>
							</input>
						</div>
						<div className="content__changeEmailPhone">
							<input
								type="button"
								className="registerChangeEmailPhone"
								value="Use phone">
							</input>
						</div>
						<div className="content__dateInfo">
							<label className="Birthday">Birthday</label>
							<div className="div__info">
								<label className="info__label">This information will not be public.
									Confirm your own age, even if this account is for a business,
									a pet, or something else.</label>
							</div>
						</div>
						<div className="content__birthdaySelect">
							<div className="birthday__Month">
								<select value={user_birthday.month} onChange={e => handleChangeMonth(e)}>
									<option> </option>
									<option>January</option>
									<option>February</option>
									<option>March</option>
									<option>April</option>
									<option>May</option>
									<option>June</option>
									<option>July</option>
									<option>August</option>
									<option>September</option>
									<option>October</option>
									<option>November</option>
									<option>December</option>
								</select>
								<label className="month__icon"><KeyboardArrowDownIcon fontSize="large" /></label>
								<label className="month__label">Month</label>
							</div>
							<div className="birthday__day">
								<select value={user_birthday.day} onChange={e => handleChangeDay(e)}>
									<option> </option>
									{[...Array(31)].map((x, i) =>
										<option key={`birthday__day_${i}`}>{++i}</option>
									)}
								</select>
								<label className="day__icon"><KeyboardArrowDownIcon fontSize="large" /></label>
								<label className="day__label">Day</label>
							</div>
							<div className="birthday__year">
								<select value={user_birthday.year} onChange={e => handleChangeYear(e)}>
									<option> </option>
									{[...Array(121)].map((x, i) =>
										<option key={`birthday__year${i}`}>{2022 - i}</option>
									)}
								</select>
								<label className="year__icon"><KeyboardArrowDownIcon fontSize="large" /></label>
								<label className="year__label">Year</label>
							</div>
						</div>
					</>
				}
				{step === 2 &&
					<div className="step2__container">
						<div className="content__registerTop">
							<div className="register__exit">
								<div type="button" onClick={() => handleGoBack()} className="exit_button">
									<ArrowBackIcon /> <span>Step 2 of 3</span>
								</div>
							</div>
						</div>
						<div className="title">
							<span>Personalize your experience</span>
						</div>
						<div className="subtitle">
							<span>Record where you see Twitter content on the web</span>
						</div>
						<label className="text">
							<div>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email or phone number.</div>
							<div>
								<input type="checkbox" name="check" id="check" />
							</div>
						</label>
						<div className="terms">
							By signing up, you agree to our <span>Terms</span>, <span>Privacy Policy</span> and <span>Cookie Policy</span>. Twitter may use your contact information, such as your email address and phone number, for the purposes described in our Privacy Policy. <span>More information</span>
						</div>
					</div>
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