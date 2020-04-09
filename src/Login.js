import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Login.css" ;

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange=this.handleChange.bind(this);
    this.resetUserInputs=this.resetUserInputs.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push("/tasks");
  }

  resetUserInputs(){
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="Login">
        <h4>Welcome Back! Sign In</h4>
        <form onSubmit={this.handleSubmit} className="Login-Main">
          <div className="Login-Set">
            <label htmlFor="email">Email</label>
            <div className="Login-Text">
              <i class="fas fa-envelope-open"></i>
              <input 
                placeholder="john@example.com" 
                id="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
            </div>
          </div>
          <div className="Login-Set">
            <label htmlFor="password">Password</label>
            <div className="Form-Text">
              <i class="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="************"
                value={this.state.password}
                name="password"
                id="password"
                onChange={this.handleChange}/>
            </div>
          </div>
          <button className="Login-Button">Login 
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
        <h5>New User? <Link to="/">Register</Link></h5>
      </div>
    )
  }
}
export default Login;