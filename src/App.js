import React from'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './page/homepage/homepage-components'
import ShopPage from './page/shopPage/shopPage.component.jsx'
import Header from './components/header-component/header.component';
import SignInPage from './page/signin-signup-page/signin-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null; 

  componentDidMount() {

    const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state);
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  };

  render() {
    return (
      <div>
        <Header />
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render ={ () => this.props.currentUser? (<Redirect to="/" />) : (<SignInPage />) } />
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
