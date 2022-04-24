import Header from './components/Header';
import './App.css';
import Home from './components/Home';

function App() {
  //BEM
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
