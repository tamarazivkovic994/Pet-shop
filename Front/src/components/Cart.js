import React from "react";
import { MDBCard, MDBCardGroup, MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementItem, decrementItem, deleteItem } from "../redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleCloseCart = () => {
    navigate("/shop");
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <MDBCardGroup className="m-3 cardGroupShop">
          {cartItems.map((item) => (
            <MDBCard className="d-flex flex-row justify-content-between align-items-center cardItem" key={item.id}>
              <img src={item.image} className="card-img-top m-1 p-2 cardImage" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.details}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
              </div>
              <div className="buttons-group">
                <MDBBtn className="m-1" color="success" onClick={() => handleIncrement(item.id)}>
                  +
                </MDBBtn>
                {item.quantity > 1 && (
                  <MDBBtn className="m-1" color="warning" onClick={() => handleDecrement(item.id)}>
                    -
                  </MDBBtn>
                )}
                <MDBBtn className="m-1" color="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </MDBBtn>
              </div>
            </MDBCard>
          ))}
          <div className="total-amount">
            <h4>Total Amount: ${totalCost.toFixed(2)}</h4>
          </div>
        </MDBCardGroup>
      ) : (
        <h2>Your cart is empty</h2>
      )}
      <MDBBtn onClick={handleCloseCart} color="dark">
        Continue Shopping
      </MDBBtn>
    </div>
  );
};

export default Cart;
