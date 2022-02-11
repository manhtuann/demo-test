import react from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './page/home'
import Services from './page/Services';
import Products from './page/Products';
import Signup from './page/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/services'  component = {Services} />
      <Route path='/products' component = {Products} />
      <Route path='/sign-up'  component = {Signup} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
