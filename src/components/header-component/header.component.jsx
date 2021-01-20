import React from 'react';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/4.2 crown.svg';

import './header.component.styles.scss';


const Header = () => (
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
    </div>
  </div>
);

export default Header;