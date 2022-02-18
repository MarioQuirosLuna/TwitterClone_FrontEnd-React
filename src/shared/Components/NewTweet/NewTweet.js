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

const NewTweet = ({
	placeholder = 'Place Holder',
	isComment,
	toUser,
	idPost
}) => {
	const appContext = useContext(AppContext)


	const [textPost, setTextPost] = useState('')

	const handleChangeInput = (e) => {
		setTextPost(e.target.value)
	}

	return (
		<div className="newTweet__container">
			<section className="main__navHome">
				{isComment &&
					<div className="text_replying">
						<span>Replying to <TextBlue label={toUser} /></span>
					</div>
				}
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
								placeholder={placeholder}
							/>
							{!isComment &&
								<div className="formNavHome__input-span">
									<TextBlue label="Everyone can reply" />
								</div>
							}
						</div>
						<div className="formNavHome__options">
							<div className="formNavHome__options-icons">
								<div>
									<ImageOutlinedIcon />
								</div>
								<div>
									<GifBoxOutlinedIcon />
								</div>
								{!isComment &&
									<div>
										<PollOutlinedIcon />
									</div>
								}
								<div>
									<SentimentSatisfiedAltOutlinedIcon />
								</div>
								{!isComment &&
									<div>
										<DateRangeOutlinedIcon />
									</div>
								}
								<div>
									<AddLocationAltOutlinedIcon />
								</div>
							</div>
							<div>
								<BtnTwitter
									label={!isComment ? 'Tweet' : 'Reply'}
									isComment={isComment}
									textPost={textPost}
									setTextPost={setTextPost}
									idPost={idPost}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NewTweet
