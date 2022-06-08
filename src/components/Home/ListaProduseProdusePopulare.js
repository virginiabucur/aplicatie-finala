import "./ListaProdusePopulare.css";
// import { useState, useEffect } from "react";
import {Row, Col, Container} from "reactstrap";
import { Link } from "react-router-dom";
import Home from "../../views/Home";


function ListaProdusePopulare(populare) {
return (
    
    <Row xs='12' md='4'
    className="produse_populare">
        <Link to = {"../../views/Home/"}>
        <p>{populare.title}</p>
        <p>{populare.image}</p>
       </Link>
       
    </Row>
);
}
    export default ListaProdusePopulare;