import {Col} from "reactstrap";

function ListaProdusePopulare({ populare }) {
  return (
    <>
      <div>
      <img
        src={populare.image}
        style={{
          height: "200px",
          objectFit: "contain",
          width: "100%",
        }}
      />
      <h4>{populare.title}</h4>
      <p>{populare.price} {"EUR"}</p>
    </div>
    </>
  );
}
export default ListaProdusePopulare;
