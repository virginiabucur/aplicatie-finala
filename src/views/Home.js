import { Button } from "reactstrap";
import {Carousel} from "react-bootstrap";
import "./Home.css";
function Home() {
    return(
   
    
    <Carousel variant="dark">
    <Carousel.Item>
    <img
      className="cover_image"
      src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/11/slider-home2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Drop chair</h2>
      <h3>The black Leather Edition</h3>
      <p>descriere</p>
      <Button>DESCOVER NOW!</Button>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    
    );
}
export default Home;

{/* <div>
        <img 
        className="cover_image"
        src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/11/slider-home2.jpg"
        alt= ""
        descriere=""

        />
        <h1> Drop chair </h1>
        <h1> The black Leather Edition </h1>
        <p>descriere</p>
    </div>
    <Button>DESCOVER NOW</Button> */}

