import React from 'react';
import SignIn from '../../components/sign-in.component/sign-in.component';
import SignUp from '../../components/sign-up/sign-up-component';

import './signin-signup.styles.scss';

const SignInPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp /> 
  </div>
);

export default SignInPage;