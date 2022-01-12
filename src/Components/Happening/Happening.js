import BtnTwitter from '../../shared/Components/BtnTwitter/BtnTwitter'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'

import './Happening.scss'

import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'



const Happening = () => {
	return (
		<div className="container">
			<section className="header">
				<div>
					<h2>Home</h2>
				</div>
				<div>
					<StarRateOutlinedIcon />
				</div>             
			</section>
			<section className="main">
				<div className="main__content">
					<div className="main__content-photo">
						<PhotoUser url={undefined}/>
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
								<div>
									<ImageOutlinedIcon />
								</div>
								<div>
									<GifBoxOutlinedIcon />
								</div>
								<div>
									<PollOutlinedIcon />
								</div>
								<div>
									<SentimentSatisfiedAltOutlinedIcon />
								</div>
								<div>
									<DateRangeOutlinedIcon />
								</div>
								<div>
									<AddLocationAltOutlinedIcon />
								</div>
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
