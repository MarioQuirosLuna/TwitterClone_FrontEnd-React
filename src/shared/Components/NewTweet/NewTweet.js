import { useContext, useState } from 'react'

import { AppContext } from '../../../Context/AppContext'

import PhotoUser from '../PhotoUser/PhotoUser'
import TextBlue from '../TextBlue/TextBlue'
import BtnTwitter from '../BtnTwitter/BtnTwitter'

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'

import './NewTweet.scss'

const NewTweet = () => {
	const appContext = useContext(AppContext)


	const [textPost, setTextPost] = useState('')

	const handleChangeInput = (e) => {
		setTextPost(e.target.value)
	}

	return (
		<div className="newTweet__container">
			<section className="main__navHome">
				<div className="mainNavHome__Content">
					<div className="mainNavHome__Content-photo">
						{appContext?.user &&
							<PhotoUser url={appContext?.user.user_photo} />
						}
					</div>
					<div className="mainNavHome__Content-form">
						<div className="formNavHome__input">
							<input
								type="text"
								name="text_posted"
								value={textPost}
								onChange={e => handleChangeInput(e)}
								placeholder="What's happening?"
							/>
							<div className="formNavHome__input-span">
								<TextBlue label="Everyone can reply" />
							</div>
						</div>
						<div className="formNavHome__options">
							<div className="formNavHome__options-icons">
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
								<BtnTwitter label="Tweet" textPost={textPost} setTextPost={setTextPost} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NewTweet
