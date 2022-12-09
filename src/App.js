import logo from './logo.svg';
import '../src/Styles/App.css';
import { Router, Switch, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Pages/Home';
function App() {
  return (
    <>
      {/* <Router>
        <Route path="/" exact element={<Home />} />
      </Router> */}
      <Home />
    </>
  );
}

export default App;
