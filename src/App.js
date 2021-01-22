import React from'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage/homepage-components'
import ShopPage from './page/shopPage/shopPage.component.jsx'
import Header from './components/header-component/header.component';
import SignInPage from './page/signin-signup-page/signin-sign-up.component';


// const HatsPage = () => (
//   <div>
//     <h1>
//       HATS
//     </h1>
//   </div>
// );


function App() {
  return (
    <div>
      <Header />
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInPage}/>
     </Switch>
    </div>
  );
}

export default App;
