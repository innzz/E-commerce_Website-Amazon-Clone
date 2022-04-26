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

function App() {
  //BEM
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
