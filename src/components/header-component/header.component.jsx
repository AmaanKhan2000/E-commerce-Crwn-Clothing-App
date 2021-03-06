import React from 'react';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/4.2 crown.svg';
import { auth } from '../firebase/firebase.utils';

import './header.component.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';



const Header = ({currentUser}) => (
  <div className='header'>
    <Link to= '/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = (state) => ({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);