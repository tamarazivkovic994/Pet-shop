import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";

const PaypalCheckoutButton = (props) => {
  const [paidFor, setPaidFor] = useState(false);
  const { product, onPaymentSuccess } = props;
  const [error, setError] = useState(null);
  const totalValue = product.reduce(
    (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
    0
  );

  const handleApprove = (data, actions) => {
    setPaidFor(true);
    onPaymentSuccess();
  };

  useEffect(() => {
    if (paidFor) {
      alert("Payment Successful");
    }
  }, [paidFor]);

  if (error) {
    alert("Payment Failed");
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      onClick={(data, actions) => {
        const hasAlreadyBoughtCourse = false;

        if (hasAlreadyBoughtCourse) {
          setError("You already bought this item. ");

          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: totalValue.toFixed(2),
              },
            },
          ],
        });
      }}
      onCancel={() => {
        //   console.log("PayPal checkout cancel");
      }}
      onError={(err) => {
        console.log("PayPal checkout error ", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
