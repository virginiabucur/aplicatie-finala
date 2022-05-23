import "./Search.css";
import { useState } from "react";
function Search({ handleSearch }) {

	// Pas9: vom face o variabila de stare;
	//  astfel de fiecare data cand scriem in input,acele informatii vor fi puse in variabila de stare
	const [inputSearch, setInputSearch] = useState("");

	return (
		<div className='container_search'>
			<input
				value={inputSearch}
				type='text'
				placeholder='Search...'
				onChange={(e) => {
					setInputSearch(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleSearch(inputSearch);
				}}>
				Search
			</button>
			<button
				onClick={() => {
					handleSearch(null);
					setInputSearch("");
				}}>
				Clear
			</button>
		</div>
	);
}

export default Search;