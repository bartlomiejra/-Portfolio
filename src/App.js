// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter  as Router, Switch, Route} from "react-router-dom"; 
import './App.css';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import Posts from './components/pages/Posts';
import SignUp from './components/pages/SignUp';



function App() {
  return (
	  
	  <Router>
		  
	
<Switch>
	<Route path='/' exact component={Home} />
	<Route path='/quotes' exact component={Quotes} />
	<Route path='/posts' exact component={Posts} />
	<Route path='/sign-up' exact component={SignUp} />

</Switch>
	  </Router>
  );
}

export default App;
