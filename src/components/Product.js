import React, {Component} from 'react';


class Product extends Component{
    constructor(){
        super()
        this.state = {data:[1,2,3,4,5,6,7,8,9,10],check: true}
    }

render(){return <div class="container products">
 
 <div id="wrapper" className={`${this.state.check}`}>
      <aside id="sidebar-wrapper"><button className='btn_1' onClick= {(e) => this.setState(p => ({check: !p.check}))}>O</button>
      <div class="sidebar-brand ">
        <h2>cart</h2>
        
      </div>
      <ul class="sidebar-nav">
        <li class="active">
          <a href="#"><i>8 x 10</i> <i className='product_cart'>x {`${this.state.data.length}`}</i></a>
        </li>
        <li class="">
          <a href="#"><i>8 x 12</i></a>
        </li>
      </ul>
    </aside>
    </div>
  

  <main class="grid">
    
      {this.state.data.map(a=>{
          return <article>
          <img src="https://5.imimg.com/data5/GA/GN/MY-10830752/sublimation-tile-8x10-500x500.jpg" alt="Sample photo"/>
          <div class="text">
            <h3>8 x 10</h3>
            <p>Actual size of Photo (8x10). width:20.3cm; height:25.4cm. as_size / as_monitor full screen drag it iframe embed. Actual size image of Photo (8x10) .</p>
            <a href="" class="btn btn-primary btn-block">Add to Cart</a>
          </div>
        </article>
      })}
    
    
  </main>
</div>
}
}

export default Product