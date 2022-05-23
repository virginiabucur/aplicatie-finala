import "./Navigare.css";
import {Link, link} from "react-router-dom";

function Navigare (){
    return (
    <div className='container_navigare'>
            <p classlogo='logo'>Outstock</p>
        <div>
            <Link className = 'links' to='/'>Home</Link>
            <Link className = 'links' to='/produse'>Produse</Link>
            <Link className = 'links' to='/wishlist'>Wishlist</Link>
        </div>
    </div>
    );
}

export default Navigare;