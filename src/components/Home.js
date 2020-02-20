import React from "react"
import About from './About'
import Contact from './Contact'

import { Switch,Route } from 'react-router-dom';

const Home = ()=>{
    return <main>
         <h1>sdkjgk</h1>
       <Switch>
           <Route path='/about'>
                <About/>
           </Route>
           <Route path='/contact'>
                <Contact/>
           </Route>
       </Switch>
    </main>
}
export default Home