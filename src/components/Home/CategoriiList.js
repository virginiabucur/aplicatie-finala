import "./CategoriiList.css";
// import CategoriiCard from "../../common/CategoriiCard";
import { Button, Col,Row, Container } from "reactstrap";
import { Link } from "react-router-dom";



function CategoriiList({ categorii }) {
//   console.log(JSON.stringify(categorii));
  return categorii.slice(0,4).map((categorii, key) => {
    return (
	<Container className="categorii_list">
		<Col>
				<img 
					src="https://demo.lion-themes.net/outstock/wp-content/uploads/2016/08/8-2.jpg"
					style = 
					{{
					width:"500px",
					height:"100px",
					objectFit:"contain",
					}}
				/>
				<h4>{categorii}</h4>
				{key}
			<Link to='/produse'>
				<Button>Descover now!</Button>
			</Link>
		</Col>
	</Container>
    );
  });
}
export default CategoriiList;

// function Category({ cat }) {
// 	return (
// 		<Col xs='12' md='4' marginbottom='50px'>
// 			<img
// 				src='https://cdn.shopify.com/s/files/1/1573/5553/files/banner1_360x.jpg?v=1522250209'
// 				style={{
// 					height: "300px",
// 					objectFit: "cover",
// 					width: "100%",
// 					marginTop: "50px",
// 				}}
// 			/>
// 			<h3>{cat}</h3>
// 			<Link to='/Produse'>
// 				<Button>Go to Products</Button>
// 			</Link>
// 		</Col>
// 	);
// }

// export default Category;


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
