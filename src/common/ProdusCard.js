//avem date despre un produs
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
				<Button outline>Add to wishlist!</Button>
			</div>
		</Col>
	);
}

export default ProdusCard;