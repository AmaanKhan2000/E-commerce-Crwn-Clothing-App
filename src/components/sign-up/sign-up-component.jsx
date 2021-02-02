import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';

import { auth } from '../firebase/firebase.utils';

import { createUserProfileDocument } from "../firebase/firebase.utils";

import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
  constructor(){
    super()

    this.state = { 
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }

  handleSubmit = async event => { 

    event.preventDefault()

    const {displayName,email,password,confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, {displayName})

      this.setState({ 
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      })
    }
    catch(error){
      console.error('error');
    }
    
  };

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value})
  }

  render(){

    const {displayName,email,password,confirmPassword} = this.state;

    return(
      <div className='sign-up'>
        <h2 className='title'>
          I don't have an account created
        </h2>
        <span>Sign up with email and passowrd</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
          type='text'
          name='displayName'
          onChange={this.handleChange}
          value={displayName}
          label='Name'
          required
          />
          <FormInput
          type='email'
          name='email'
          onChange={this.handleChange}
          value={email}
          label='E-mail'
          required
          />
          <FormInput
          type='password'
          name='password'
          onChange={this.handleChange}
          value={password}
          label='Password'
          required
          />
          <FormInput
          type='password'
          name='confirmPassword'
          onChange={this.handleChange}
          value={confirmPassword}
          label='Confirm Password'
          required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;