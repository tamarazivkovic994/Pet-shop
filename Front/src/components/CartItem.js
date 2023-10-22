import { useDispatch, useSelector } from "react-redux";
import { MDBCard } from "mdb-react-ui-kit";
import item from "../data/items.json";

const ProductCart = (props) => {
  const dispetch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <MDBCard className="d-flex justify-content-center align-items-center cardItem">
        <img
          src={item.image}
          className="card-img-top m-1 p-2 cardImage"
          alt={item.name}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.details}</p>
          <p className="card-text">Price: {item.price}</p>
        </div>
        <div></div>
      </MDBCard>
    </div>
  );
};

export default ProductCart;
