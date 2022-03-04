import React, { Component } from 'react'

import '../assets/css/style.css'
import '../assets/css/bootstrap.css'

import img21 from '../assets/img/monitor.webp'
import img22 from '../assets/img/gaming.jpg'
import img23 from '../assets/img/realmepad.jpg'
import img24 from '../assets/img/asus.jpg'




class Bestseller extends Component {
    render() {
        return (
            <div>
            
                <div className="tab-pane fade" id="bestseller">
                 <ul className="aa-product-catg aa-featured-slider">
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img21} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Best Deals on Monitors</a></h4>
                          <span className="aa-product-price">35% off</span><span className="aa-product-price"><del>10% off</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                      </div>
                      {/* <!-- product badge --> */}
                      <span className="aa-badge aa-sale" href="#">SALE!</span>
                    </li>
                     {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img22} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                        <figcaption>
                          <h4 className="aa-product-title"><a href="#">Gaming Laptopd</a></h4>
                          <span className="aa-product-price">From ₹49,990 </span>
                        </figcaption>
                      </figure>                      
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img23} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                      </figure>
                      <figcaption>
                        <h4 className="aa-product-title"><a href="#">realme Pad </a></h4>
                        <span className="aa-product-price">Only at ₹14,999</span>
                      </figcaption>
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                      {/* <!-- product badge --> */}
                       <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                    </li>
                    {/* <!-- start single product item --> */}
                    <li>
                      <figure>
                        <a className="aa-product-img" href="#"><img src={img24} alt="polo shirt img"/></a>
                        <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                         <figcaption>
                          <h4 className="aa-product-title"><a href="#">Asus Vivobook</a></h4>
                          <span className="aa-product-price">₹46,990</span><span className="aa-product-price"><del>₹43,990</del></span>
                        </figcaption>
                      </figure>                     
                      <div className="aa-product-hvr-content">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                        <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                      </div>
                    </li>
                                                                                                    
                  </ul>
                  <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                </div>
          
            </div>
        )
    }
}
export default Bestseller