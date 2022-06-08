import {Col} from "reactstrap";

function ListaProdusePopulare({ populare }) {
  return (
    <Col xs="12" md="4" className="produse_populare">
      <img
        src={populare.image}
        style={{
          height: "200px",
          objectFit: "contain",
          width: "100%",
        }}
      />
      <h4>{populare.title}</h4>
      <p>{populare.price}</p>
    </Col>
  );
}
export default ListaProdusePopulare;
