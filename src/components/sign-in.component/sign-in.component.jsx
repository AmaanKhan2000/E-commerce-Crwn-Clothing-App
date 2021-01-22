import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(){
    super();

    this.state ={
      email:'',
      password: ''
    }
  }

  HandleSubmit = event => {
    event.preventDefault()
    this.setState({email:'', password:''})
  }
  HandleChange = (event) => {
    const {name,value} = event.target
    this.setState({[name] : value})
  }
    render(){
      return (
        <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.HandleSubmit}>
          <input 
            name='email'
            type="email"
            value={this.state.email}
            placeholder='Enter email'
            onChange={this.HandleChange}/>

          <label htmlFor="email">Email</label>
          <input 
            name='password'
            type="password"
            value={this.state.password}
            placeholder='Enter password'
            onChange={this.HandleChange}/>

          <label htmlFor="password">Password</label>

          <input type="submit" value="Submit Form"/>
        </form>
        </div>

      )
        
    }
}

export default SignIn;