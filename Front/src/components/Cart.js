import React from "react";
import { MDBCard, MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import {
  incrementItem,
  decrementItem,
  deleteItem,
  deleteAll,
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
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleCloseCart = () => {
    navigate("/shop");
  };

  const totalCost = cartItem.reduce((total, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
      return total + price * quantity;
    }
    return total;
  }, 0);
  console.log(totalCost);

  const [cardInfo, setCardInfo] = React.useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePaymentInfoChange = (event) => {
    const { name, value } = event.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (!cardInfo.cardNumber.match(/^\d{16}$/)) {
      alert("Please enter a valid card number.");
      return;
    }

    if (!cardInfo.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      alert("Expiry date should be in MM/YY format.");
      return;
    }

    if (!cardInfo.cvv.match(/^\d{3,4}$/)) {
      alert("Please enter a valid 3 or 4 digit CVV.");
      return;
    }

    alert("Payment submitted! ");
    handleDeleteAll();
  };

  return (
    <div className="cart-container" style={{ paddingTop: "10%" }}>
      <h1>Your Cart</h1>
      {cartItem.length > 0 ? (
        <>
          <MDBRow className="row-cols-1 row-cols-md-4 g-3">
            {cartItem.map((item) => (
              <MDBCol key={item.id}>
                <MDBCard className="h-90 cart-card">
                  <img
                    src={item.image}
                    className="card-img-top m-1 p-2 cartImage"
                    alt={item.name}
                    style={{ height: "300px", borderRadius: "10px" }}
                  />
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
                    <MDBBtn
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </MDBBtn>
                  </div>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
          <div className=" m-3 p-3 gap-2 totalPrice">
            <p className="card-text">Price: $ {totalCost.toFixed(2)}</p>
            <MDBBtn onClick={handleDeleteAll} color="dark">
              Delete All
            </MDBBtn>
          </div>
        </>
      ) : (
        <h2>Your cart is empty</h2>
      )}

      {cartItem.length > 0 && (
        <div className="payment-section m-3 p-3">
          <h3>Payment Details</h3>
          <MDBInput
            label="Card Number"
            id="cardNumber"
            name="cardNumber"
            onChange={handlePaymentInfoChange}
            value={cardInfo.cardNumber}
          />
          <MDBInput
            label="Expiry Date (MM/YY)"
            id="expiryDate"
            name="expiryDate"
            onChange={handlePaymentInfoChange}
            value={cardInfo.expiryDate}
          />
          <MDBInput
            label="CVV"
            id="cvv"
            name="cvv"
            onChange={handlePaymentInfoChange}
            value={cardInfo.cvv}
          />
          <MDBBtn onClick={handleCheckout} color="success">
            Checkout
          </MDBBtn>
        </div>
      )}
      <MDBBtn onClick={handleCloseCart} color="dark">
        Continue Shopping
      </MDBBtn>
    </div>
  );
};

export default Cart;
