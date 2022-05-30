import "./Navigare.css";
import {Link, link} from "react-router-dom";

function Navigare (){
    return (
    <div className='container_navigare'>
            <p classlogo='logo'>Outstock</p>
            <div className='left_component'>
            <Link className = 'links' to='/'>Home</Link>
            <Link className = 'links' to='/produse'>Produse</Link>
            </div>
            <Link className = 'links' to='/wishlist'>Wishlist</Link>
    </div>
    );
}

export default Navigare;