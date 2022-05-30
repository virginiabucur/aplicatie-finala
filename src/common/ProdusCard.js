//avem date despre un produs
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { addToWishlist } from "../helpers";

function ProdusCard({ produs }) {
	return (
		<Col xs='12' md='6'>
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
				<p>{produs.price}</p>
			</Link>
			<div style={{ minHeight: "50px" }}>
			<Button
				className='mt-4 mb-4'
				onClick={() => {
					addToWishlist(produs);
				}}>
				Add to wishlist!
			</Button>
			</div>
		</Col>
	);
}

export default ProdusCard;
