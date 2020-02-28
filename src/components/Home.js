import React from "react"
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Register from './Register'
import Login from './Login'

import { Switch,Route } from 'react-router-dom';

const Home = ()=>{
    return <main>  
          <Switch>
          <Route path='/' exact>
          <div class="jumbotron text-center">
          <div id="inner-wrap"><svg class="waves" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75" viewBox="0 0 960 214.5" preserveAspectRatio="xMinYMid meet"><defs><style></style><linearGradient id="a"><stop stop-color="#00A8DE"/><stop offset="0.2" stop-color="#333391"/><stop offset="0.4" stop-color="#E91388"/><stop offset="0.6" stop-color="#EB2D2E"/></linearGradient></defs><path fill="url(#a)" d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"/><path fill="#F2F5F5" d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"/><g fill="none" stroke="#E2E9E9" stroke-width="1"><path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7"/><path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7"/></g></svg></div>
        <h1>Samrat Studio</h1> 
        <p>Quality with Quantity</p> 
        <form>
          <div class="input-group">
            <input type="email" class="form-control" size="50" placeholder="Email Address" required/>
            <div class="input-group-btn">
              <button type="button" class="btn">Subscribe</button>
            </div>
          </div>
        </form>
      </div>


      

      <div class="container-fluid bg-grey">
        <div class="row">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-globe logo slideanim"></span>
          </div>


          
          <div class="col-sm-8">
            <h2>Our Values</h2><br/>
            <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
            <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div id="services" class="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br/>
        <div class="row slideanim">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-off logo-small"></span>
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-heart logo-small"></span>
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-lock logo-small"></span>
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
        <br/><br/>
        <div class="row slideanim">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-leaf logo-small"></span>
            <h4>GREEN</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-certificate logo-small"></span>
            <h4>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-wrench logo-small"></span>
            <h4 >HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>


      <div id="portfolio" class="container-fluid text-center bg-grey">
        <h2>Portfolio</h2><br/>
        <h4>What we have created</h4>
        <div class="row text-center slideanim">
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src="paris.jpg" alt="Paris" width="400" height="300"/>
              <p><strong>Paris</strong></p>
              <p>Yes, we built Paris</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src="newyork.jpg" alt="New York" width="400" height="300"/>
              <p><strong>New York</strong></p>
              <p>We built New York</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
              <p><strong>San Francisco</strong></p>
              <p>Yes, San Fran is ours</p>
            </div>
          </div>
        </div><br/>
        
        <h2>What our customers say</h2>
        <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>


          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
            </div>
            <div class="item">
              <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
            </div>
            <div class="item">
              <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
            </div>
          </div>


          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>


      <div id="pricing" class="container-fluid">
        <div class="text-center">
          <h2>Pricing</h2>
          <h4>Choose a payment plan that works for you</h4>
        </div>
        <div class="row slideanim">
          <div class="col-sm-4 col-xs-12">
            <div class="panel panel-default text-center">
              <div class="panel-heading">
                <h1>Basic</h1>
              </div>
              <div class="panel-body">
                <p><strong>20</strong> Lorem</p>
                <p><strong>15</strong> Ipsum</p>
                <p><strong>5</strong> Dolor</p>
                <p><strong>2</strong> Sit</p>
                <p><strong>Endless</strong> Amet</p>
              </div>
              <div class="panel-footer">
                <h3>$19</h3>
                <h4>per month</h4>
                <button class="btn btn-lg">Sign Up</button>
              </div>
            </div>      
          </div>     
          <div class="col-sm-4 col-xs-12">
            <div class="panel panel-default text-center">
              <div class="panel-heading">
                <h1>Pro</h1>
              </div>
              <div class="panel-body">
                <p><strong>50</strong> Lorem</p>
                <p><strong>25</strong> Ipsum</p>
                <p><strong>10</strong> Dolor</p>
                <p><strong>5</strong> Sit</p>
                <p><strong>Endless</strong> Amet</p>
              </div>
              <div class="panel-footer">
                <h3>$29</h3>
                <h4>per month</h4>
                <button class="btn btn-lg">Sign Up</button>
              </div>
            </div>      
          </div>       
          <div class="col-sm-4 col-xs-12">
            <div class="panel panel-default text-center">
              <div class="panel-heading">
                <h1>Premium</h1>
              </div>
              <div class="panel-body">
                <p><strong>100</strong> Lorem</p>
                <p><strong>50</strong> Ipsum</p>
                <p><strong>25</strong> Dolor</p>
                <p><strong>10</strong> Sit</p>
                <p><strong>Endless</strong> Amet</p>
              </div>
              <div class="panel-footer">
                <h3>$49</h3>
                <h4>per month</h4>
                <button class="btn btn-lg">Sign Up</button>
              </div>
            </div>      
          </div>    
        </div>
      </div>




      <img src="/w3images/map.jpg" class="w3-image w3-greyscale-min"/>
   </Route>   
           <Route path='/about' exact>
                <About/>
           </Route>
           <Route path='/contact'>
                <Contact/>
           </Route>
           <Route path='/product'>
                <Product/>
           </Route>
           <Route path='/register'>
                <Register/>
           </Route>
           <Route path='/login'>
                <Login/>
           </Route>
       </Switch>
    </main>
}
export default Home