import { useState } from 'react';
import './App.css';
import Navi from './Navi'
import ShoppingCard from './ShoppingCard';
import Rating from '@mui/material/Rating';

function App() {
  const [cartValue,setCartValue]=useState(0);
  const [toggle1,setToggle1]=useState(false);
  const [toggle2,setToggle2]=useState(false);
  const [toggle3,setToggle3]=useState(false);
  const [toggle4,setToggle4]=useState(false);
  const [toggle5,setToggle5]=useState(false);
  const [toggle6,setToggle6]=useState(false);
  const [toggle7,setToggle7]=useState(false);
  const [toggle8,setToggle8]=useState(false);

  return <>
    <div>
      <Navi data={cartValue}/>
      <ShoppingCard/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
            <div className="card h-100">
                            <img className="card-img-top" src='https://rukminim1.flixcart.com/image/421/505/ktizdzk0/shoe/y/b/x/7-ws-9310-tying-grey-original-imag6ut3hzm2zyqm.jpeg?q=50' alt="shoes" />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">World Wear Footwear</h5>
                                    Rs. 499
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle1((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle1((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/800/960/kcgk1ow0/shoe/i/l/x/71004-unistar-olive-green-original-imaftktubhnjsz7b.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Trekking Shoes Boots For Men </h5>
                                    Rs. 1549
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle2((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle2((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>

            <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/jawthu80/shoe/n/c/n/gp001-10-aadi-beige-original-imafydr9mdgncwya.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Boots For Men</h5>
                                    Rs. 999
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle3((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle3((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                </div>
                        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/kyoqmq80/sandal/s/f/h/7-stepper-navy-yellow-sfr-navyyellow-original-imagavfnzffzxbzm.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">crakers For Men</h5>
                                    Rs. 299
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle4((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle4((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                  </div>
                        <div className="col mb-5"> 
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/kuvkcy80/sandal/h/w/a/8-xxx-01-black-red-8-sfr-black-red-original-imag7wamy9ynjqef.jpeg?q=50
                        " alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Casual Shoes Loafers</h5>
                                    Rs. 549
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle5((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle5((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                  </div>
                        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/kdlzte80-0/shoe/6/c/l/gw-703-44-gulass-wick-03-brown-original-imafuhyn53cn86cm.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Men Black Sandal</h5>
                                    Rs. 366
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle6((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle6((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/ks99aq80/sandal/w/k/v/6-102-blk-sndl-40-bruton-black-original-imag5v6bbthff8ph.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Men Casual Sandal</h5>
                                    Rs. 700
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle7((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle7((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://rukminim1.flixcart.com/image/495/594/kzrbiq80/slipper-flip-flop/9/e/2/5-blast-1-black-blast-1-grey-evok-black-grey-original-imagbp7yfuvpvffm.jpeg?q=50" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Men Black slipper</h5>
                                    Rs. 279
                                </div>
                                <div className="text-center">
                                    <Rating />
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                  toggle8?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle8((previous)=>!previous)
                                  }}>Remove</button>:
                                  <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle8((previous)=>!previous)
                                  }} >Add to Cart</button>
                                  
                                }
                                </div>
                            </div>
                        </div>
            </div>
            </div>
          </div>
        </section>

      <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </div>
  </>
}

export default App;