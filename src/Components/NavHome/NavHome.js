import { useContext, useState } from 'react'

import BtnTwitter from '../../shared/Components/BtnTwitter/BtnTwitter'
import PhotoUser from '../../shared/Components/PhotoUser/PhotoUser'
import TextBlue from '../../shared/Components/TextBlue/TextBlue'

import { AppContext } from '../../Context/AppContext'

import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'

import './NavHome.scss'

const NavHome = () => {
	const appContext = useContext(AppContext)
	const [textPost, setTextPost] = useState('')

	const handleChangeInput = (e) => {
		setTextPost(e.target.value)
	}

	return (
		<div className="container__navHome">
			<section className="header__navHome">
				<div className="headerNavHome__Photo">
					<div className="headerNavHome__Photo-user">
						{appContext?.user &&
							<PhotoUser url={appContext?.user.user_photo} size='32' />
						}
					</div>
					<div>
						<h2>Home</h2>
					</div>
				</div>
				<div>
					<StarRateOutlinedIcon />
				</div>
			</section>
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
								<BtnTwitter label="Tweet" textPost={textPost} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NavHome
