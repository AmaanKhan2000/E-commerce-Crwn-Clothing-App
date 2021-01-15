import React from'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage/homepage-components'
import ShopPage from './page/shopPage/shopPage.component.jsx'


const HatsPage = () => (
  <div>
    <h1>
      HATS
    </h1>
  </div>
);


function App() {
  return (
    <div>
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
