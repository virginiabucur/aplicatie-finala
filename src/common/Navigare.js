import "./Navigare.css";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "reactstrap";

function Navigare (){
    return (
    <Col
        xs="12"
	    md ="6"
        className='container_navigare'>
            <Link className='links' to = '/'>
                <p classlogo='logo'
                    xs="12"
                    md ="6">
                Outstock
                </p>
            </Link>
            <div className='left_component'>
                <Link className = 'links' to='/'>Home</Link>
                <Link className = 'links' to='/produse'>Produse</Link>
            </div>
            <Link className = 'links' to='/wishlist'>Wishlist</Link>
    </Col>
    );
}

export default Navigare;