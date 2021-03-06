import { Button, Container, Row, Col } from "reactstrap";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
// import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import CategoriiList from "../components/Home/CategoriiList";
import ListaProdusePopulare from "../components/Home/ListaProduseProdusePopulare";

function Home() {
  //p1 categorii
  const [categorii, setCategorii] = useState(null);
  //Pas3: creeam functia ce va seta datele de care avem nevoie
  //in prima faza datele sunt transformate in json, apoi sunt afisate
  const getCategorii = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const categoriiFromAPI = await response.json();
    // Pas5: punem produsele in variabila de stare si dispare Loading
    setCategorii(categoriiFromAPI);
    console.log(categoriiFromAPI);
  };

  //Pas2: declaram useEffect (se apeleaza o singura data pe pagina) prin care vrem sa apelam o functie care seteaza datele noastre
  //Pas4: in interiorul lui useEffect, apelam functia getProduse
  useEffect(() => {
    getCategorii();
  }, []);

  const [populare, setPopulare] = useState(null);
  const getPopulare = async () => {
    const responseP = await fetch("https://fakestoreapi.com/products?limit=8");
    const populareFromAPI = await responseP.json();
    setPopulare(populareFromAPI);
    console.log(populareFromAPI);
  };

  useEffect(() => {
    getPopulare();
  }, []);

  return (
   
    <Container className="home_container">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="cover_image"
            src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/11/slider-home2.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h2>Drop chair</h2>
            <h3>The black Leather Edition</h3>
            <p>Visit us!</p>
            <Link className="links" to="/produse">
              <Button>DESCOVER NOW!</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="cover_image"
            src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/11/slider-home2-1.jpg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h2>Home products</h2>
            <h3>Creative furniture</h3>
            <p>Visit us!</p>
            <Link className="links" to="/produse">
              <Button>DESCOVER NOW!</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="categorii">
        <Row>
          <h1>Category</h1>
        </Row>
        <Row>
          {categorii ? (
            <CategoriiList categorii={categorii} key={"categorii_"} />
               ) : (
              <div>Loading...</div>
                )}
        </Row>
      </div>
      <div>
      <Row>
        <div className="populare">
        <h1>Trending Products</h1>
        <h4>Cele mai cautate produse le gasiti in lista de mai jos</h4>
        </div>
      </Row>
      <Row md='4'>
        {populare ? (
          <>
            {populare.map((populare, index) => {
              return <ListaProdusePopulare populare={populare} />;
            })}
          </>
        ) : (
          <div>Loading ...</div>
        )}
      </Row>
      </div>
    </Container>
 
  );
}
export default Home;
