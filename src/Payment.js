import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './components/CheckoutProduct';
import {Link, useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';
import PaymentForm from './PaymentForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise =  loadStripe('pk_test_51KuKq4SBGQM7bc6w1NaxMQ7th0GLJ5jRtaGpoJ1DIUNGm2Ucjv1wNvA6FjB7K74ygcIG6u6u0z75J6sWZtyRKHnL00lE1EiqES');


function Payment() {
    const navigate = useNavigate();
    const [{basket,user}, dispatch] = useStateValue();

    // const stripe = useStripe();
    // const elements = useElements();

    const [succeeded, setsucceeded] = useState(false);
    const [processing, setprocessing] = useState("");
    const [error, seterror] = useState(null);
    const [disabled, setdisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);


    axios.defaults.baseURL="http://localhost:5001/clone-228d2/us-central1/api";
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
                const response = await axios({
                    method: 'POST',
                    // Stripe expects the total in a currencies subunits
                    url: `/payment/create?total=${getBasketTotal(basket) * 100}`
                });
               setclientSecret(response.data.client_secret) 
        }
        getClientSecret();
    }, [basket])

    // console.log('THE SECRET IS >>>', clientSecret)
    

    
    // const handleOnSubmit= async (e)=>{
    //     e.preventDefault();
    //     setprocessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method:{
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({ paymentIntent })=>{
    //         //paymentIntent = payment confirmation
    //         setsucceeded(true);
    //         seterror(null);
    //         setprocessing(false);

    //         navigate('/orders',{replace:true});
            
    //     }) 
    // };
    
    const handleOnChange = (e)=>{
        setdisabled(e.empty);
        seterror(e.error?e.error.message:"");

    };
  return (
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Dadar East</p>
                    <p>Mumbai:400015</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_item">
                    {basket?.map((item,index) => (
                        <CheckoutProduct 
                        key={index}
                        id={item.id} 
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    {/* Stripe magic will be here */}
                    <Elements stripe={stripePromise}>
                    <PaymentForm />
                    </Elements>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;