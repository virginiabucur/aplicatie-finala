import "./CategoriiList.css";
// import CategoriiCard from "../../common/CategoriiCard";
import { Button, Col, Container, Row } from "reactstrap";


function CategoriiList({ categorii }) {
  console.log(JSON.stringify(categorii));
  return categorii.map((categorii, key) => {
    return (
	<Container>
		<Row>
					{categorii}
					{key}
		</Row>
	</Container>
    );
  });
}
export default CategoriiList;


// function CategoriiList({ categorii }) {
// 	return (
		
// 		<div className='list_container'>
// 			{categorii.map((categorii, key) => {
// 				return (<CategoriiCard produs={categorii} key={"categorii_" + key} />);
// 			})}
// 		</div>
// 	);
// }
// export default CategoriiList;
