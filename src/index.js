import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'    
import './index.css';  
 import Spells from './components/spells';
 import App from'./App'
 import HouseDetails from './components/houseDetails.js';
 import Hat from'./components/hat.js'
 import Houses from './components/houses'
 import Characters from "./components/characters"
 import NotFound from "./components/pagenotfound"
import Header from './components/Header';
import Footer from './components/footer.js'
import Letter from './components/letter'
 
  
const routing = (  
  <Router>  
    <div>  
      <Header />
     


     <Switch>
      <Route exact path ="/" render= {() => <App />} />  
      <Route path = '/characters' component={Characters} />
      <Route path='/houses/:house_id' component={HouseDetails} />
      <Route path = '/spells' component={Spells} />
      <Route path='/houses' component={Houses} />
      <Route path='/sortinghat' component={Hat} />
      <Route path = '/letter' component={Letter} />
      
      <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  