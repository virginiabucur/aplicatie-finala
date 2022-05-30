import "./Wishlist";
import { useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";

function Wishlist() {
	const [produs, setProdus] = useState([]);

	const onDelete = (id) => {
		const filteredArray = produs.filter((produs) => {
			return produs.id !== id;
		});
		setProdus(filteredArray);
		localStorage.setItem("produsList", JSON.stringify(filteredArray));
	};

	useEffect(() => {
		const produsListStorage = localStorage.getItem("postList");
		if (produsListStorage) {
			const produsArray = JSON.parse(produsListStorage);
			setProdus(produsArray);
		}
	}, []);

	return (
		<>
			<Container>
				<Row>
					{produs.map((produs) => {
						return (
							<div className='table_row' key={"produs_wishlist_" + produs.title}>
								<h3>{produs.title}</h3>
								<Button
									color='danger'
									onClick={() => {
										onDelete(produs.image);
									}}>
									Sterge!
								</Button>
							</div>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
export default Wishlist;