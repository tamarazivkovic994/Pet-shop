import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  toggleCart,
  deleteAll,
  deleteItem,
  updateTitle,
} from "../redux/features/cartSlice";


  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, num) => acc + num.price * num.quantity,
    0
  );
  const cartQuantity = cartItems.length;

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleUpdate = (id) => {
    dispatch(updateTitle(id, document.getElementById("inputTitle").value));
  };

  return (
    <>
      {isCartOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>Cart</h2>
              <div className="close_btn" onClick={() => handleOpenCart(false)}>
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {cartQuantity === 0 ? (
                <h2>Cart is empty</h2>
              ) : (
                <div>
                  {cartItems.map((item) => {
                    const { id, img, title, price, quantity } = item;
                    const totalItem = quantity * price;

                    return (
                      <div className="cart-items" key={id}>
                        <figure className="cart_img">
                          <img src={img} alt={title} />
                        </figure>
                        <div className="cart_item_title">
                          <input
                            type="text"
                            className="inp"
                            id="inputTitle"
                            value={title}
                            onBlur={(e) => handleUpdate(id, e.target.id)}
                          ></input>
                        </div>
                        <div className="cart_item_price">{totalItem}$</div>
                        <div className="cart_item_quantity">
                          <span onClick={() => handleIncrement(id)}>+</span>
                          {quantity}

                          <span onClick={() => handleDecrement(id)}>-</span>
                        </div>
                        <div>
                          <button
                            className="btn"
                            onClick={() => handleDeleteItem(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div className="btF">
                    <button className="btn" onClick={handleDeleteAll}>
                      Delete All
                    </button>
                  </div>
                  <div className="total">{total}$</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
