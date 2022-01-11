import BtnTwitter from '../../shared/Components/BtnTwitter/BtnTwitter'

import './Happening.scss'

const Happening = () => {
	return (
		<div className="container">
			<section className="header">
				<div>
					<h2>Home</h2>
				</div>
				<div>
						Icon
				</div>             
			</section>
			<section className="main">
				<div className="main__content">
					<div className="main__content-photo">
                        Photo
					</div>
					<div className="main__content-form">
						<div className="form__input">
							<input type="text" placeholder="What's happening?"/>
							<div className="form__input-span">
								<span>Everyone can reply</span>
							</div>
						</div>
						<div className="form__options">
							<div className="form__options-icons">
                                icons
							</div>
							<div className="form__options-btn">
								<BtnTwitter label="Tweet"/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Happening
