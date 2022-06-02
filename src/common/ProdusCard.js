//avem date despre un produs
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import {useState} from "react";
import {addToWishlist} from "../helpers";


function ProdusCard({ produs }) {
	const [showButton, setshowButton] = useState(false);
	return (
		<Col 
			xs='12' 
			md='6'
			onMouseEnter={()=>{
				setshowButton(true);
				}}
			onMouseLeave={()=>{
					setshowButton(false);
				}}>
			<Link
				to={"..common/ProdusList/" + produs.id}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				<img
					src={produs.image}
					alt={produs.description}
					style={{
						height: "300px",
						objectFit: "cover",
						width: "100%",
						marginTop: "60px",
					}}
				/>
				<h2>{produs.title}</h2>
				{/* //de adaugat cuvantul ron dupa price */}
				<p>{produs.price}</p> 
			</Link>
			<div style={{ minHeight: "50px" }}>
				{showButton && (
					<Button
						className='mt-4 mb-4'
						outline
						onClick={() => {
						addToWishlist(produs);
						}}>
					Add to wishlist!
				</Button>
				)}
			</div>
		</Col>
	);
}

export default ProdusCard;
