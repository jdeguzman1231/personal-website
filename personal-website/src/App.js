import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.js';
import HomePage from './HomePage.js';

function App() {
  return (
   <Router>
    <NavBar />
    <Route exact path = '/' component = {HomePage}></Route>
   </Router>
  );
}

export default App;
