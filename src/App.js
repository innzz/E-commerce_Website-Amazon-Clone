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

function App() {
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
      <Route exact path='/' element={<><Header /><Home /></>}/> 
      <Route exact path='/checkout' element={<><Header /><Checkout /></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
