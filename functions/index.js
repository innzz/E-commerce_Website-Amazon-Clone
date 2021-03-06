const functions = require("firebase-functions");

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')('sk_test_51KuKq4SBGQM7bc6w6i6FlgkzuekC8rQcmrPDken7VhR1MzQqqMPHJotoaFp4JdUSHaiN1QirrqAmJzLSwdf0Blxr006o9BYNCD')

//Api
console.log(stripe);

//App config
const app = express();

//Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

//Api routes
app.get('/',(request,response)=> response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
        
        const total = request.query.total;
      
        console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
      
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total, // subunits of the currency
          currency: "inr",
        });
      
        // OK - Created
        response.status(201).send(paymentIntent);
  });

//Listen command
exports.api = functions.https.onRequest(app)
