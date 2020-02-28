import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
        this.state = {style:'active'}
    }
    

render (){
    return <main className='login_s'>
       
<div class="wrapper">
  <form className='form'>
    <h1>Login</h1>
    <h5>Enter your Login Details</h5>
    <div class="btn-box"><a class="btn btn-link" href="" target="_blank">Login with Google</a></div>
    <NavLink to='/register'>Register</NavLink>
    <hr class="sep"/>
    <div class="group">
      <input className='input' type="text" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Email</label>
    </div>
    <div class="group">
      <input className='input' type="password" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Password</label>
    </div>
    <div class="btn-box">
      <button class="btn btn-submit" type="submit">submit</button>
      <button class="btn btn-cancel" type="button">reset</button>
    </div>
  </form>
</div>
    </main>


}}
export default Login