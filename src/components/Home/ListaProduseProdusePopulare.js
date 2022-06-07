// import "./ProdusList.css";
import { useState, useEffect } from "react";
import {Row, Col, Container} from "reactstrap";




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
                        {populare.map((populare, key) => {
                            // return <Home populare={populare} />;
                        })}
                    </>
                ) : (
                    <div>Loading ...</div>
                )}</Row>



            
        </div>
		
	);
}
export default ListaProdusePopulare;

