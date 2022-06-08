//avem date despre un produs
import { Col, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {useState} from "react";
import {addToWishlist} from "../helpers";


function ProdusCard({ produs }) {
	const [showButton, setshowButton] = useState(false);
	return (
		<Col xs='12' md='3'
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
					style={{
						height: "380px",
						objectFit: "contain",
						width: "100%",
						marginTop: "60px",
					}}
				/>
				<h4>{produs.title}</h4>
				<p>{produs.price} {"EUR"}</p> 
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
