import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51KpyqnCL9DKoXt25F5rGlDBF9Kn3XaqcUlMdRaVV7mw1EBfLuA1kPKQrkzWWoUSl8GjdjEZgOKhoJAaIYC0BnZWQ00LPV1GPTu";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <div className="credit">
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Stripe;
