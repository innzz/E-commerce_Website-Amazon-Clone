import Header from './Header';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { setUser } from '../Action';
import Orders from './Orders';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

  const promise =  loadStripe('pk_test_51KuKq4SBGQM7bc6w1NaxMQ7th0GLJ5jRtaGpoJ1DIUNGm2Ucjv1wNvA6FjB7K74ygcIG6u6u0z75J6sWZtyRKHnL00lE1EiqES');

  function App(props) {
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
      <Route exact path='/orders' element={<><Header /><Orders /></>} />
      <Route exact path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
      <Route exact path='/' element={<><Header /><Home /></>}/> 
      <Route exact path='/checkout' element={<><Header /><Checkout /></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
