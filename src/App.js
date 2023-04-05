import React from 'react';
// import './App.css';
import Navbar from './components/NavbarElement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/Index';
import Events from './pages/Event';
import AnnualReport from './pages/Annual';
import Teams from './pages/Teams';
import Blogs from './pages/Blog';
import SignUp from './pages/SignUp';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/About' component={About} />
		<Route path='/Events' component={Events} />
		<Route path='/Annual' component={AnnualReport} />
		<Route path='/Teams' component={Teams} />
		<Route path='/Blogs' component={Blogs} />
		<Route path='/SignUp' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
