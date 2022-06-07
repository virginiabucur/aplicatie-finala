// import "./ProdusList.css";
import { useState, useEffect } from "react";
import {Row, Col, Container} from "reactstrap";
// import Home from "../../views/Home";




function ListaProdusePopulare() {
  const [populare, setPopulare] = useState(null);
  const getPopulare = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=8"
    );
    const populareFromAPI = await response.json();
    setPopulare(populareFromAPI);
    console.log(populareFromAPI);
  };

  useEffect(() => {
    getPopulare();
  }, []);

	return (
		<div>
            <Row> {populare ? (
                    <>
                        {populare.map((populare, index) => {
                            return <Home populare={populare} key={"populare_" + index} />;
                        })}
                    </>
                ) : (
                    <div>Loading ...</div>
                )}</Row>
        <Row>
                    {populare.title}
        </Row>


            
        </div>
		
	);
}
export default ListaProdusePopulare;

