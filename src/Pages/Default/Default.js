import './Default.scss'

const Default = () => {
	return (
		<div className="default__containerPage">
			<div className="default__menuInitial">
				<div>
					<div>
						<i>
							Icon tweeter
						</i>
					</div>
					<div>
						<p>
							What is happening now
						</p>
						<p>
							Join Twitter today.
						</p>
					</div>
					<div>
						<div>
							Sign up with Google
						</div>
						<div>
							Sign up with Apple
						</div>
						<div>
							<div>----</div>
							<div>
								<span>or</span>
							</div>
							<div>----</div>
						</div>
						<span>
							Sign up with phone number or email
						</span>
						<div>
							By signing up, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.
						</div>
					</div>
					<div>
						<div>
							Do you already have an account?
						</div>
						<div>Log in</div>
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