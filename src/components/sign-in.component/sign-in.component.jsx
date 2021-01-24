import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(){
    super();

    this.state ={
      email:'',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({email:'', password:''})
  }
  handleChange = (event) => {
    const {name,value} = event.target
    this.setState({[name] : value})
  }
    render(){
      return (
        <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email'
            type="email"
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}/>

          <FormInput 
            name='password'
            type="password"
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}/>

          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
        </form>
        </div>

      )
        
    }
}

export default SignIn;