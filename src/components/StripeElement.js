import React from 'react';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

  const promise =  loadStripe('pk_test_51KuKq4SBGQM7bc6w1NaxMQ7th0GLJ5jRtaGpoJ1DIUNGm2Ucjv1wNvA6FjB7K74ygcIG6u6u0z75J6sWZtyRKHnL00lE1EiqES');

function StripeElement() {
  return (
    <Elements stripe={promise}><Payment /></Elements>
  )
}

export default StripeElement