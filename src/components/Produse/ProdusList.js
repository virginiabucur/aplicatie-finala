import "./ProdusList.css";
import ProdusCard from "../../common/ProdusCard";


//pas7: afisare informatii in lista folosindu ne de array, pe care il parcurgem 
//parcurgem array ul cu map
//key = proprietate de tipul: string+index

function ProdusList({ produs }) {
	return (
		<div className='list_container'>
			{produs.map((produs, index) => {
// Pas8: de facut design ul pentru ProdusCard, in loc de h3, ne folosim de card
				//return 
				// (<div key={"produs_" + index}>{produs.title}<p>{produs.description}</p></div>
				
				// );

				return (<ProdusCard produs={produs} key={"produs_" + index} />);
				
				
			})}

			
		</div>
	);
}

export default ProdusList;