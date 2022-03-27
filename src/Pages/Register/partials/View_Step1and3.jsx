import { Link } from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TwitterIcon from '@mui/icons-material/Twitter'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const ViewStep1and3 = ({
	step,
	user_name,
	setUser_name,
	user_email,
	setUser_email,
	user_phone,
	setUser_phone,
	user_password,
	setUser_password,
	user_birthday,
	setUser_birthday,
	handleGoBack
}) => {

	const handleChangeName = (e) => {
		setUser_name(e.target.value)
	}

	const handleChangeEmail = (e) => {
		setUser_email(e.target.value)
	}
	const handleChangePassword = (e) => {
		setUser_password(e.target.value)
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

	return (
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
			<div className="content__register">
				<input
					type="text"
					value={user_name}
					onChange={e => handleChangeName(e)}
					className="registerInput__name"
					placeholder="  Name"
					required>
				</input>
			</div>
			<div className="content__register">
				<input
					type="text"
					value={user_email}
					onChange={e => handleChangeEmail(e)}
					className="registerInput__email"
					placeholder="  Email"
					required>
				</input>
			</div>
			{step === 3 &&
				<div className="content__register">
					<input
						type="password"
						value={user_password}
						onChange={e => handleChangePassword(e)}
						className="registerInput__email"
						placeholder="  Password"
						required>
					</input>
				</div>
			}
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
	)
}

export default ViewStep1and3