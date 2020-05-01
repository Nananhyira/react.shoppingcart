import React from 'react';
import './router/css/bootstrap.min.css';
import './router/css/style.css';
import insert2 from './router/img/insert2.jpg';
import insert1 from './router/img/insert1.jpg';
import insert3 from './router/img/insert3.jpg';
import insert4 from './router/img/insert4.jpg';
import insert5 from './router/img/insert5.jpg';
import insert6 from './router/img/insert6.jpg';



import './App.css';

function App() {
  return (
    <div className="App">
  
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <h3>Sizes:</h3>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">XS</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">S</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">M</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">ML</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">L</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">XL</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="sizes text-center text">XXL</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <br/>
                <p className="text-center price">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="sizes-button">
                    <div>
                        <button className="btn btn-defualt"><span class="glyphicon glyphicon-star"
                                aria-hidden="true"></span> Star</button>
                    </div>
                    <button className="btn btn-defualt btnn">848</button>
                </div>
            </div>
            <div className="col-md-10">
                
                    <div className="container">
                        <div className="col-md-3">
                            <p className="heading">16 Product(s) found.</p>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-3 order">
                            <p className="heading">Order by</p>
                            <p className="heading"> <select name="select" id="">
                                    <option value="Select">Select</option>
                                </select>
                            </p>
                        </div>
                    </div>
                
                
              
                
                <br/>
                
                
                    <div class="col-md-3">
                    <img src={insert4} class="img-responsive image" alt=""/>
                        <h4 class="text-center">Lorem ipsum dolor sit.</h4>
                        <div class="yellow-bar"></div>
                        <h4 class="text-center"><small>$</small>10.<small>90</small></h4>
                        <h5 class="text-center price">or 9 x$10</h5>
                        <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                            cart</button>
                        <div class="shipping">
                            <p class="pshipping">Free Shipping</p>
                        </div>
                    </div>
                     <div className="col-md-3">
                     <img src={insert1} class="img-responsive image" alt=""/>
                     <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                     <div className="yellow-bar"></div>
                     <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                     <h5 className="text-center price">or 9 x$10</h5>
                     <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                         cart</button>
                     <div className="shipping">
                         <p className="pshipping">Free Shipping</p>
                     </div>
                     </div>
                 
                 <div className="col-md-3">
                 <img src={insert2} class="img-responsive image" alt=""/>
                 <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                 <div className="yellow-bar"></div>
                 <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                 <h5 className="text-center price">or 9 x$10</h5>
                 <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                     cart</button>
                 <div className="shipping">
                     <p className="pshipping">Free Shipping</p>
                 </div>
                 </div>
            
            <div className="col-md-3">
            <img src={insert3} class="img-responsive image" alt=""/>
            <h4 className="text-center">Lorem ipsum dolor sit.</h4>
            <div className="yellow-bar"></div>
            <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
            <h5 className="text-center price">or 9 x$10</h5>
            <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                cart</button>
            <div className="shipping">
                <p className="pshipping">Free Shipping</p>
            </div>
        </div>
        
        </div>
        </div>
        
        
                <br/>
                <div className="row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <div class="col-md-3">
                    <img src={insert5} class="img-responsive image" alt=""/>
                        <h4 class="text-center">Lorem ipsum dolor sit.</h4>
                        <div class="yellow-bar"></div>
                        <h4 class="text-center"><small>$</small>10.<small>90</small></h4>
                        <h5 class="text-center price">or 9 x$10</h5>
                        <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                            cart</button>
                        <div class="shipping">
                            <p class="pshipping">Free Shipping</p>
                        </div>
                    </div>
                     <div className="col-md-3">
                     <img src={insert1} class="img-responsive image" alt=""/>
                     <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                     <div className="yellow-bar"></div>
                     <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                     <h5 className="text-center price">or 9 x$10</h5>
                     <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                         cart</button>
                     <div className="shipping">
                         <p className="pshipping">Free Shipping</p>
                     </div>
                     </div>
                 
                 <div className="col-md-3">
                 <img src={insert6} class="img-responsive image" alt=""/>
                 <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                 <div className="yellow-bar"></div>
                 <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                 <h5 className="text-center price">or 9 x$10</h5>
                 <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                     cart</button>
                 <div className="shipping">
                     <p className="pshipping">Free Shipping</p>
                 </div>
                 </div>
            
            <div className="col-md-3">
            <img src={insert3} class="img-responsive image" alt=""/>
            <h4 className="text-center">Lorem ipsum dolor sit.</h4>
            <div className="yellow-bar"></div>
            <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
            <h5 className="text-center price">or 9 x$10</h5>
            <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                cart</button>
            <div className="shipping">
                <p className="pshipping">Free Shipping</p>
            </div>
        </div>
        </div>
        </div>
         
                <br/>
                <div className="row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <div class="col-md-3">
                    <img src={insert4} class="img-responsive image" alt=""/>
                        <h4 class="text-center">Lorem ipsum dolor sit.</h4>
                        <div class="yellow-bar"></div>
                        <h4 class="text-center"><small>$</small>10.<small>90</small></h4>
                        <h5 class="text-center price">or 9 x$10</h5>
                        <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                            cart</button>
                        <div class="shipping">
                            <p class="pshipping">Free Shipping</p>
                        </div>
                    </div>
                     <div className="col-md-3">
                     <img src={insert1} class="img-responsive image" alt=""/>
                     <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                     <div className="yellow-bar"></div>
                     <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                     <h5 className="text-center price">or 9 x$10</h5>
                     <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                         cart</button>
                     <div className="shipping">
                         <p className="pshipping">Free Shipping</p>
                     </div>
                     </div>
                 
                 <div className="col-md-3">
                 <img src={insert5} class="img-responsive image" alt=""/>
                 <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                 <div className="yellow-bar"></div>
                 <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                 <h5 className="text-center price">or 9 x$10</h5>
                 <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                     cart</button>
                 <div className="shipping">
                     <p className="pshipping">Free Shipping</p>
                 </div>
                 </div>
            
            <div className="col-md-3">
            <img src={insert2} class="img-responsive image" alt=""/>
            <h4 className="text-center">Lorem ipsum dolor sit.</h4>
            <div className="yellow-bar"></div>
            <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
            <h5 className="text-center price">or 9 x$10</h5>
            <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                cart</button>
            <div className="shipping">
                <p className="pshipping">Free Shipping</p>
            </div>
        </div>
        </div>
        </div>
        <br/>
        <div className="row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <div class="col-md-3">
                    <img src={insert4} class="img-responsive image" alt=""/>
                        <h4 class="text-center">Lorem ipsum dolor sit.</h4>
                        <div class="yellow-bar"></div>
                        <h4 class="text-center"><small>$</small>10.<small>90</small></h4>
                        <h5 class="text-center price">or 9 x$10</h5>
                        <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                            cart</button>
                        <div class="shipping">
                            <p class="pshipping">Free Shipping</p>
                        </div>
                    </div>
                     <div className="col-md-3">
                     <img src={insert3} class="img-responsive image" alt=""/>
                     <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                     <div className="yellow-bar"></div>
                     <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                     <h5 className="text-center price">or 9 x$10</h5>
                     <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                         cart</button>
                     <div className="shipping">
                         <p className="pshipping">Free Shipping</p>
                     </div>
                     </div>
                 
                 <div className="col-md-3">
                 <img src={insert5} class="img-responsive image" alt=""/>
                 <h4 className="text-center">Lorem ipsum dolor sit.</h4>
                 <div className="yellow-bar"></div>
                 <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
                 <h5 className="text-center price">or 9 x$10</h5>
                 <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                     cart</button>
                 <div className="shipping">
                     <p className="pshipping">Free Shipping</p>
                 </div>
                 </div>
            
            <div className="col-md-3">
            <img src={insert1} class="img-responsive image" alt=""/>
            <h4 className="text-center">Lorem ipsum dolor sit.</h4>
            <div className="yellow-bar"></div>
            <h4 className="text-center"><small>$</small>10.<small>90</small></h4>
            <h5 className="text-center price">or 9 x$10</h5>
            <button type="submit" class="btn btn-primary btn-block button" name="button">Add to
                cart</button>
            <div className="shipping">
                <p className="pshipping">Free Shipping</p>
            </div>
        </div>
        </div>
        </div>
               
                </div>
            
        
    

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    

</div>
     
    
  );
}

export default App;
