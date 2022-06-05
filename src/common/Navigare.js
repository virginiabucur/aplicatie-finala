import "./Navigare.css";
import {Link} from "react-router-dom";

function Navigare (){
    return (
    <div className='container_navigare'>
            <Link className='links' to = '/'><p classlogo='logo'>Outstock</p></Link>
            <div className='left_component'>
            <Link className = 'links' to='/'>Home</Link>
            <Link className = 'links' to='/produse'>Produse</Link>
            </div>
            <Link className = 'links' to='/wishlist'>Wishlist</Link>
    </div>
    );
}

export default Navigare;