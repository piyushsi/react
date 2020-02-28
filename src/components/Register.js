import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'

class Register extends Component{
    constructor(){
        super()
        this.state = {style:'active'}
    }
    

render (){
    return <main className='login_s'>
       
<div class="wrapper">
  <form className='form'>
    <h1>Register</h1>
    <h5>Register to get the products</h5>
    <div class="btn-box"><NavLink class="btn btn-link" to="/login" >Login</NavLink></div>
    <NavLink to='/register'>Forget Password</NavLink>
    <hr class="sep"/>
    <div class="group">
      <input className='input' type="text" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Name</label>
    </div>
    <div class="group">
      <input className='input' type="text" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Email</label>
    </div>
    <div class="group">
      <input className='input' type="password" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Password</label>
    </div>
    <div class="group">
      <input className='input' type="number" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Number</label>
    </div>
    <div class="group">
      <textarea type="textarea" rows="5" required="required"></textarea><span class="highlight"></span><span class="bar"></span>
      <label>Message</label>
    </div>
    <div class="btn-box">
      <button class="btn btn-submit" type="submit">submit</button>
      <button class="btn btn-cancel" type="button">reset</button>
    </div>
  </form>
</div>
    </main>


}}
export default Register