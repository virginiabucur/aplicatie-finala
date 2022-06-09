import { Link } from "react-router-dom";
import "./Footer.css";
import {Row, Col, Container} from "reactstrap";

function Footer() {
	return (
		<>
		<Col className='footer_container'
			xs="12"
			md ="6">
			{/* <div className='footer_container'
			xs="12"
			md ="6"> */}
				<div className="links_and_company">
					<div>
					<Link style={{color: "white"}} className='links' to='/'>Home</Link>
					<Link style={{color: "white"}}className='links' to='/produse'>Produse</Link>
					</div>
					<h5>Company name 2015</h5> 
				</div>
				<div className="icons">
					<img src='https://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/128/facebook-icon.png'
					alt='Facebook'/>
					<img src='https://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/128/twitter-icon.png'
					alt='Twitter'/>
					<img src='https://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/128/linkedin-icon.png'
					alt='linkedin'/>
					<img src='https://icons.iconarchive.com/icons/social-media-icons/glossy-social/128/Github-icon.png'
					alt='Github'/>
				</div>
			{/* </div> */}
			</Col>
		</>
	);
}
export default Footer;