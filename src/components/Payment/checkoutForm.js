import React, { useEffect, useState, useContext } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import "./styles.css";
import firebase from '../../services/firebase';

import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import { useHistory } from "react-router-dom";

export default function CheckoutForm({amount, quantity, id, seller, event}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const id_ticket = Math.floor(Math.random() * 65536123);
    const purchase_date = format(new Date(), 'dd/MM/yyyy') 

    await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    })
    .then(async () => {
      await firebase.firestore().collection('purchases').doc(`${id_ticket}`).set({
        price: amount,
        ticket_quantity: quantity,
        id_ticket,
        id_event: id,
        id_buyer: user.uid,
        id_seller: seller,
        purchase_date,
        buyer: user.name,
        status: 'succeed'
      }).then(async() => {
        const seller_value = await firebase.firestore().collection('users').doc(`${seller}`).get()

        if(seller_value == undefined){
          await firebase.firestore().collection('users').doc(`${seller}`).update({
            amount
          })
        }else{
          await firebase.firestore().collection('users').doc(`${seller}`).update({
            amount: seller_value.data().amount + amount
          }).then(() => {
            history.push(`/purchased/${id_ticket}`)
          })
        }
      })
    })
    
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}