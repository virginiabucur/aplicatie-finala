import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<>
			<div className='footer_container mx-auto'>
				<div className='util_links'>
					<Link style={{color: "white"}} className='links' to='/'>
						Home
					</Link>
					<Link style={{color: "white"}}className='links' to='/produse'>
						Produse
					</Link>
				</div>
				<div><h5>Company name 2015</h5></div>
			</div>
		</>
	);
}
export default Footer;