import "./Produse.css";
import Search from "../components/Produse/Search";
import ProdusList from "../components/Produse/ProdusList";
import { useState, useEffect } from "react";
import {Row, Col, Container} from "reactstrap";
// import {addToWishlist} from "../helpers";
// import Footer from "../common/Footer";


function Produse() {
	//Pas1: definim variabila de stare, initial fara valori in ea
	const [produs, setProdus] = useState(null);
	//Pas10: facem o variabila de stare care aduce datele din input Search in pagina principala, folosindu ne de HEANDLE
	const [inputValue, setInputValue] = useState(null);

	//Pas3: creeam functia ce va seta datele de care avem nevoie 
	//in prima faza datele sunt transformate in json, apoi sunt afisate
	const getProdus = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const produsFromAPI = await response.json();
	// Pas5: punem produsele in variabila de stare si dispare Loading
		setProdus(produsFromAPI);
	};


	//Pas11: creeam ofunctie care ne va seta input ul cand dam click pe Search
	const onSearch = (input) => {
		setInputValue(input);
	};


	//Pas14: creeam o functie care filtreaza ij functie de input, functia creeaza un nou array
	const filterByInput = (arrayProdus, searchValue) => {
		//Daca nu avem o valoare dupa care sa filtram, vom afisa tot array-ul
		if (searchValue === null) return arrayProdus;

		// const filteredByCategories = arrayProducts.filter(...filtrare dupa categorie)
		// filteredByCategories.filter(..input)

		//Altfel, Vom filtra in functie de valoare array-ul
		return arrayProdus.filter((produs) => {
			return produs.title.toLowerCase().includes(searchValue.toLowerCase());
		});
	};

	//Pas2: declaram useEffect (se apeleaza o singura data pe pagina) prin care vrem sa apelam o functie care seteaza datele noastre
	//Pas4: in interiorul lui useEffect, apelam functia getProduse
	useEffect(() => {
		getProdus();
		
	}, []);

	return (
		<>
			<Container>
			<div className='container_produse'>
				<Col 
				md="4" xs="12"
				>
						<h2>Product categories</h2>
						<h3>Accessories</h3>
						<h3>Fashion</h3>
						<h3>Men</h3>
					{/* Link catre accesorii
					fashon*/}
				</Col>
			{/* sub denumire pagina aducem Search ul */}
				<Col 
				// md="4" xs="12"
				>
					{/* <Row> */}
						<Search handleSearch={onSearch} />
						{/* sub Search aducem lista de produse */}
						{/* daca avem produse in lista, afisam ProdusList, altfel afisam un div ce contine mesajul:Loading */}
						{/* Pas6: trimitem datele privind produsele la ProdusList */}
					{/* </Row> */}
					{/* <Row 
					md="3"> */}
						{produs ? (
						<ProdusList produs={filterByInput(produs, inputValue)} />
							) : (
						<div>Loading...</div>
				)}
					{/* </Row> */}
				</Col>
				</div>
			</Container>
		</>
	);
}
export default Produse;

// exemplu filtrare pe categorii
// const arr = ['one', 'two', 'three', 'four'];
// const categories = ['one', 'two'];

// const multipleExist = values(poate fi string).every(value => {
//   return arr.includes(value);
// });

// console.log(multipleExist); // 👉️ true