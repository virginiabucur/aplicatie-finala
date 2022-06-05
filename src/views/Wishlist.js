//Pas1: importam useState si useEffect din react
import { useState, useEffect } from "react";
//Pas4: importam container ul, row ul si col din reactstrap
import {Container, Row, Button, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {Table} from "bootstrap";
import "./Wishlist.css";

function Wishlist() {
		//Pas2: in interiorul wishlist ului facem un state pt produsele ce levom avea acolo;
		// initaial array ul va fi gol
		//pas3: ca si array vom creea un obiect pt care avem nevoie de: id si title, date pe care le vom lua din localStorage
	const [produs, setProdus] = useState([]);
	
	//pas8: apelam functia useEffect; luam datele din local storage si le punem in useeffect
	useEffect (() =>{
		const produsListStorage = localStorage.getItem("produsList");
		if(produsListStorage){
			const produsArray = JSON.parse(produsListStorage);
			setProdus(produsArray);
			
		}	
	}, []);
	//pas6: construim o functie care va fi apelata la apasarea butonului de stergere
	//ca parametru aceasta functie va primi id ul produsului
	//creeam un array nou, filtrat
	//returnam true:dc vream sa pastram produsul, false: dc vrem sa il stergem
	const onDelete = (id) =>{
		const filtredArray = produs.filter((produs)=>{
			return produs.id !== id;
		});
		setProdus(filtredArray);
		//pas9: punem array ul nou filtrat in local storage
		localStorage.setItem("produsList", JSON.stringify(filtredArray));
	};
	
	return (
		<>
	{/* //pas4: in interiorul row lui vom avea tabelul cu produsele din wishlist */}
			<Container className="cover_image">
				<div>
					<img src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/09/banner-page.jpg"
					/>
					<h2 className="text_image">Wishlist
					<br />
					<Link className = 'links' to='/'>Home</Link>
					</h2>
					<span className = 'text_image2'>/Wishlist</span>
				</div>
				<Row>
					<div className="title">
						<h3>My wishlist</h3>
						<div className="table_header">
							<Col>
								Imagine 
							</Col>
							<Col>
								Denumire
							</Col>
							<Col>
								Pret
							</Col>
							<Col>
								Actiune
							</Col>
						</div>
					</div>
					{/* pas5: folosind map  insearm o line noua pt fiecare produs  */}
					{produs.map((produs)=> {
						return(
							<div className="table_row" key={"produs_wishlist_" + produs.id}>
								<Col>
								<img
								src={produs.image}
								style={{
								height: "100px",
								objectFit: "contain",
								width: "80%",
								marginTop: "60px",
					}}
				/>
								</Col>
								<Col>
									{produs.title}
								</Col>
								<Col>
									{produs.price} {"EUR"}
								</Col>
								<Col>
									<Button 
										color='danger' 
										onClick={()=>{
											onDelete(produs.id)
									}}>
										Sterge!
									</Button>
								</Col>
							</div>
						);
					})}
				</Row>
			</Container>
		</>
	);
}
export default Wishlist;