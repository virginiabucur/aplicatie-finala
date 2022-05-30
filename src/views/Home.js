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
      <p>The drop chair wash designet</p>
      <Button>DESCOVER NOW!</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="cover_image"
      src="https://demo.lion-themes.net/outstock/wp-content/uploads/2017/11/slider-home2-1.jpg"
      alt="second slide"
    />
    <Carousel.Caption>
      <h2>Clock</h2>
      <h3>Creative furniture</h3>
      <p>From luxury waches</p>
      <Button>DESCOVER NOW!</Button>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    );
}
export default Home;
