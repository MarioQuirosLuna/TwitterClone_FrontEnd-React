import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ViewStep2 = ({ arrowIcon, handleGoBack }) => {
	return (
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
	)
}

export default ViewStep2