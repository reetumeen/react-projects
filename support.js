import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'

import img25 from '../assets/img/launch.jpg'
import img26 from '../assets/img/launch2.png'
class Support extends Component {
    render() {
        return (
            <div>
    <section id="aa-support">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-support-area">
            {/* <!-- single support --> */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-truck"></span>
                <h4>FREE SHIPPING</h4>
                <p>Best place to buy gadgets</p>
              </div>
            </div>
            {/* <!-- single support --> */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-clock-o"></span>
                <h4>30 DAYS MONEY BACK</h4>
                <p>Full Assurance!</p>
              </div>
            </div>
            {/* <!-- single support --> */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="aa-support-single">
                <span className="fa fa-phone"></span>
                <h4>SUPPORT 24/7</h4>
                <p>call on helpline or customer care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- / Support section --> */}
  {/* <!-- Testimonial --> */}
  <section id="aa-testimonial">  
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-testimonial-area">
            <ul className="aa-testimonial-slider">
              {/* <!-- single slide --> */}
              <li>
                <img src={img25} />
                {/* <!--
                 <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src="img/launch2.jpg" alt="testimonial img"/>
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                  <div className="aa-testimonial-info">
                    <p>Allison</p>
                    <span>Designer</span>
                    <a href="#">Dribble.com</a>
                  </div>
                </div> 
                --> */}
              </li>
              {/* <!-- single slide --> */}
              {/* <li>
                <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src={img26} alt="testimonial img"/>
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                  <div className="aa-testimonial-info">
                    <p>KEVIN MEYER</p>
                    <span>CEO</span>
                    <a href="#">Alphabet</a>
                  </div>
                </div>
              </li> */}
               {/* <!-- single slide --> */}
              {/* <li>
                <div className="aa-testimonial-single">
                <img className="aa-testimonial-img" src="img/testimonial-img-3.jpg" alt="testimonial img">
                  <span className="fa fa-quote-left aa-testimonial-quote"></span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui!consectetur adipisicing elit. Sunt distinctio omnis possimus, facere, quidem qui.</p>
                  <div className="aa-testimonial-info">
                    <p>Luner</p>
                    <span>COO</span>
                    <a href="#">Kinatic Solution</a>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- / Testimonial --> */}

            </div>
        )
    }
}

export default Support