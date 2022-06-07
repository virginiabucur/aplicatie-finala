import "./ProdusList.css";
import ProdusCard from "../../common/ProdusCard";

//pas7: afisare informatii in lista folosindu ne de array, pe care il parcurgem 
//parcurgem array ul cu map
//key = proprietate de tipul: string+index

function ProdusList({ produs }) {
	return (
		
		<div className='list_container'>
			{produs.map((produs, index) => {
				return (<ProdusCard produs={produs} key={"produs_" + index} />);
			})}
		</div>
	);
}
export default ProdusList;