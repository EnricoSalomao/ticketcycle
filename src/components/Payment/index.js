import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_51IxyKWDslraMljORtvvRXVq10wDKff9EGWxU459vDhOi9vdTbRDqP3MbEhEHb7xf4GhRqodvdvBJAD9J2sqGyQS700Jq59fEZC");

export default function Payment({amount, quantity, id, seller, event}) {
  const [clientSecret, setClientSecret] = useState("");

  let valueStripe = amount * 100;
  
  useEffect(() => {
    fetch(`http://localhost:8000/create-payment-intent/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: valueStripe }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
        <div className="App">
          {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm amount={amount} quantity={quantity} id={id} seller={seller} event={event}/>
              </Elements>
          )}
        </div>
  );
}