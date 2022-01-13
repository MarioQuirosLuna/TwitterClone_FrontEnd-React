import './NavMessage.scss'

const NavMessage=()=>{
	return(
		<div className="container">
			<section className="header">
				<div>
					<h2>Messages</h2>
				</div>
				<div>
					<label>icon</label>
					<label> icon</label>
				</div>
			</section>
			<section className="search">
				<div>
					<input type="text" Placeholder="Search for people and groups"></input>
				</div>
			</section>
		</div>
	)
}

export default NavMessage