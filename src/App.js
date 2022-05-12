import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { setUser } from './Action';
// import StripeElement from './components/StripeElement';
import Payment from './Payment';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise =  loadStripe('pk_test_51KuKq4SBGQM7bc6w1NaxMQ7th0GLJ5jRtaGpoJ1DIUNGm2Ucjv1wNvA6FjB7K74ygcIG6u6u0z75J6sWZtyRKHnL00lE1EiqES');

// console.log("Before the app function ",stripePromise)
function App() {
  // console.log("In the app function ",stripePromise)
  //BEM
  // eslint-disable-next-line 
  const [{}, dispatch] = useStateValue();
  
  useEffect(()=>{
      //will only run once when the app component runs

      auth.onAuthStateChanged(authUser=>{

        if (authUser) {
          //the user just logged in/ the user was logged in

          dispatch(setUser(authUser));

        }
        else{
          //the user logged out
          dispatch(setUser(null));
        }
      })
      // eslint-disable-next-line 
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/login' element={<Login />} />
      {/* <Route exact path='/payment' element={<><Header /><Payment /></>} /> */}
      <Route exact path='/payment' element={<><Header /><Payment /></>} />
      <Route exact path='/' element={<><Header /><Home /></>}/> 
      <Route exact path='/checkout' element={<><Header /><Checkout /></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
