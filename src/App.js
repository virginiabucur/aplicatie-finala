import { 
	BrowserRouter, 
	Routes, Route } 
from "react-router-dom";
import Home from "./views/Home";
import Produse from "./views/Produse";
import Wishlist from "./views/Wishlist";
import Navigare from "./common/Navigare";
import Footer from "./common/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navigare />
				{/* <div style={{ marginTop: "0px" }}> */}
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/produse/' element={<Produse />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Routes>
				{/* </div> */}
				<Footer/> 
			</BrowserRouter>
			
		</div>
	);
}

export default App;