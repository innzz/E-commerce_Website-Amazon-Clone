import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  //BEM
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />}/> 
      <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
