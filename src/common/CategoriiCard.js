//avem date despre un produs
import { Col, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {Button} from "reactstrap";


function CategoriiCard({ categorii }) {
	return (
		// <Row 
		// xs='12' 
		// md='6'>
		// <div>
		// 	{categorii}
		// </div>
		// </Row>
		<Col>
			<Link to={"..common/CategoriiList/" + categorii}>	
				<img
					src="https://demo.lion-themes.net/outstock/wp-content/uploads/2016/08/8-2.jpg"
					alt=""
					style={{
						height: "380px",
						objectFit: "contain",
						width: "100%",
						marginTop: "60px",
					}}
				/>
				<h2>descriere</h2>
				<Button>Descover now!</Button> 
			</Link>
		</Col>
	);
}
export default CategoriiCard;


