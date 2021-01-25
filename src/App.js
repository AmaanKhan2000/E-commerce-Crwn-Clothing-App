import React from'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage/homepage-components'
import ShopPage from './page/shopPage/shopPage.component.jsx'
import Header from './components/header-component/header.component';
import SignInPage from './page/signin-signup-page/signin-sign-up.component';
import { auth } from './components/firebase/firebase.utils.js';


class App extends React.Component {

  constructor(){
    super();

    this.state = {

      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInPage}/>
       </Switch>
      </div>
    );
  }
}

export default App;
