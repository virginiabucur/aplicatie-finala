import "./Produse.css";
import Search from "../components/Produse/Search";
import ProdusList from "../components/Produse/ProdusList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Footer from "../common/Footer";


function Produse() {
	//Pas1: definim variabila de stare, initial fara valori in ea
	const [produs, setProdus] = useState(null);
	//Pas10: facem o variabila de stare care aduce datle din input Search in pagina principala, folosindu ne de HEANDLE
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
			<div className='container'>
				<div>
					<h1>Product categories</h1>
					{/* Linka catre ccesorii
					fashon*/}
				</div>
			{/* sub denumire pagina aducem Search ul */}
				<div>
					<Search handleSearch={onSearch} />
					{/* sub Search aducem lista de produse */}
					{/* daca avem produse in lista, afisam ProdusList, altfel afisam un div ce contine mesajul:Loading */}
					{/* Pas6: trimitem datele privind produsele la ProdusList */}
					{produs ? (
					<ProdusList produs={filterByInput(produs, inputValue)} />
						) : (
					<div>Loading...</div>
				)}
				</div>
				
			</div>
	{/* <Footer /> */}
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