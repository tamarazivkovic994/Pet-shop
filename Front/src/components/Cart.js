import React from "react";
import { MDBCard, MDBCardGroup, MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toggleCart,
  incrementItem,
  decrementItem,
  deleteItem,
  updateTitle,
} from "../redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleUpdateTitle = (id, title) => {
    dispatch(updateTitle({ id, title }));
  };
  const handleCloseCart = () => {
    dispatch(toggleCart(false));
    navigate("/shop"); 
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <MDBCardGroup className="m-3 cardGroupShop">
        {cartItems.map((item) => (
          <MDBCard key={item.id} className="d-flex justify-content-center align-items-center cardItem">
            <img src={item.image} className="card-img-top m-1 p-2 cardImage" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.details}</p>
              <p className="card-text">Price: {item.price}</p>
              <input
                type="text"
                placeholder="Update Title"
                value={item.title}
                onChange={(e) => handleUpdateTitle(item.id, e.target.value)}
              />
            </div>
            <div>
              <MDBBtn className="d-flex justify-content-center m-1 btnCard" color="btn btn-dark" onClick={() => handleIncrement(item.id)}>
                +
              </MDBBtn>
              <span>{item.quantity}</span>
              <MDBBtn className="d-flex justify-content-center m-1 btnCard" color="btn btn-dark" onClick={() => handleDecrement(item.id)}>
                -
              </MDBBtn>
              <MDBBtn className="d-flex justify-content-center m-1 btnCard" color="btn btn-danger" onClick={() => handleDelete(item.id)}>
                Delete
              </MDBBtn>
            </div>
          </MDBCard>
        ))}
      </MDBCardGroup>
      <MDBBtn onClick={() => handleCloseCart()} color="btn btn-dark">
        Close Cart
      </MDBBtn>
    </div>
  );
};

export default Cart;