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
		<div className="container__happening">
			<section className="header__happening">
				<div className="headerHappening__Photo">
					<div className="headerHappening__Photo-user">
						<PhotoUser url={undefined} size='32'/>
					</div>
					<div>
						<h2>Home</h2>
					</div>
				</div>
				<div>
					<StarRateOutlinedIcon />
				</div>             
			</section>
			<section className="main__happening">
				<div className="mainHappening__Content">
					<div className="mainHappening__Content-photo">
						<PhotoUser url={undefined}/>
					</div>
					<div className="mainHappening__Content-form">
						<div className="formHappening__input">
							<input type="text" placeholder="What's happening?"/>
							<div className="formHappening__input-span">
								<span>Everyone can reply</span>
							</div>
						</div>
						<div className="formHappening__options">
							<div className="formHappening__options-icons">
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
							<div>
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
