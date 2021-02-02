import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
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

  handleSubmit = async event => {

    event.preventDefault()
    
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'', password:''})
    }
    catch(error){
      console.error(error)
    }
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
          <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
          
          </div>
        </form>
        </div>

      )
        
    }
}

export default SignIn;