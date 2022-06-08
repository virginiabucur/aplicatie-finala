import { Button, Container, Row, Col } from "reactstrap";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
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
    categorii && 
    populare &&
        <Container className="home_container" 
        xs="12" md="4">
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
                <p>The drop chair wash designet</p>
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
                <p>From luxury waches</p>
                <Link className="links" to="/produse">
                  <Button>DESCOVER NOW!</Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Row>
            <h1>Category</h1> 
          </Row>
          <Row className="categorii">
               {categorii ? (
                  <CategoriiList categorii={categorii} key={'categorii_'}/>
                ) : (
                  <div>Loading...</div>
                )}
            </Row>
            <div>
                <h1>Trending Products</h1>
                <h4>Descriere produse populare</h4>
            </div>
            <Row className="populare"
            md='4'>
            {populare ? (
                    <>
                        {populare.map((populare, index) => {
                            return <ListaProdusePopulare populare={populare} key={"populare_" + index} />;
                        })}
                    </>
                ) : (
                    <div>Loading ...</div>
                )}
            </Row>
            <Footer/>
        </Container>
    )

}
export default Home;
