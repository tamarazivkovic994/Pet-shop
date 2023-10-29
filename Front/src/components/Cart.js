import React from "react";
import { MDBCard, MDBCardGroup, MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../redux/features/cartSlice";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  console.log(cartItem);
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

  const totalCost = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItem.length > 0 ? (
        <>
        <MDBRow className='row-cols-1 row-cols-md-4 g-3'> 
        {cartItem.map((item) => (
          <MDBCol key={item.id}> 
            <MDBCard className="h-90"> 
              <img src={item.image} className="card-img-top m-1 p-2 cartImage" alt={item.name} />
              <div className="card-body-cart">
                <h5 className="card-title-cart">{item.name}</h5>
                <p className="card-text-cart">{item.details}</p>
                <p className="card-text-cart">Price: {item.price}</p>
                <p className="card-text-cart">Quantity: {item.quantity}</p>
              </div>
              <div className="buttons-group m-2 d-flex justify-content-center gap-2">
                <MDBBtn
                  color="success"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </MDBBtn>
                {item.quantity > 1 && (
                  <MDBBtn
                    color="warning"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </MDBBtn>
                )}
                <MDBBtn color="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </MDBBtn>
              </div>
            </MDBCard>
            </MDBCol>
            ))}
          </MDBRow>
          <div className="total-amount d-flex justify-content-center m-2">
            <h4>Total Amount: ${totalCost.toFixed(2)}</h4>
          </div>
          </>
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
