import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import imgb1 from '../assets/img/blog.png'
import imgb2 from '../assets/img/b2.jpeg'
import imgb3 from '../assets/img/b3.jpeg'
import imgb4 from '../assets/img/b4.jpeg'


 class Blog extends Component {
    render() {
        return (
            <div>

  <section id="aa-catg-head-banner">
   <img src={imgb1} alt="fashion img"/>
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>Blog Archive</h2>
        <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>         
          <li className="active">Blog Archive</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  

  {/* <!-- Blog Archive --> */}
  <section id="aa-blog-archive">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-blog-archive-area">
            <div className="row">
              <div className="col-md-9">
                <div className="aa-blog-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Emotix Miko 2 </a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src={imgb2} alt="fashion img"/></a>
                        </figure>
                        <p>Bring home the Emotix Miko 2 for yourself or your little one to gift yourself or him/her a great company to speak to and to learn from. This smart assistant features a state-of-the-art Computer Vision, Two Active Noise Cancellation Microphones, and High-performance Speakers to ensure that you or your child can communicate effectively with this device.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Geet</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Google Nest Mini (2nd Gen)</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src={imgb3} alt="fashion img"/></a>
                        </figure>
                        <p>Voice activated smart speaker with the Google Assistant Play Music from Popular Streaming Services Ask Questions, Set Daily Reminders or Get News Updates Works with Upto 6 Users with Personalised Settings Control Other Smart Devices in Home Supports Hindi language also Wireless music streaming via Bluetooth Configuration: Mono</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 28th 2017
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">CASVO Led Bulb with Bluetooth Speaker Music Light Bulb</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src={imgb4}/></a>
                        </figure>
                        <p>CASVO Music Light Bulb has a unique and exclusive two-in-one design, not only a smart LED bulb but also a speaker. Any bluetooth-enabled device can control music playing and the remote controller can adjust the light color. As a bulb, it adopted with high quality led light source, high standard brightness. Controlled by a remote controller</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">kashish</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2019
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/3.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/2.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/1.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/3.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/2.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <article className="aa-blog-content-single">                        
                        <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/fashion/1.jpg" alt="fashion img"></a>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum accusamus dolorum ipsam adipisci laudantium laborum ipsa excepturi soluta, dolore similique, velit id, rerum repudiandae enim modi! Quo, debitis, in.</p>
                        <div className="aa-article-bottom">
                          <div className="aa-post-author">
                            Posted By <a href="#">Jackson</a>
                          </div>
                          <div className="aa-post-date">
                            March 26th 2016
                          </div>
                        </div>
                      </article>
                    </div> */}

                  </div>
                </div>
                {/* <!-- Blog Pagination --> */}
                <div className="aa-blog-archive-pagination">
                  <nav>
                    <ul className="pagination">
                      <li>
                        <a aria-label="Previous" href="#">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li>
                        <a aria-label="Next" href="#">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-3">
                <aside className="aa-blog-sidebar">
                  <div className="aa-sidebar-widget">
                    <h3>Category</h3>
                    <ul className="aa-catg-nav">
                      <li><a href="#">Smart devices</a></li>
                      <li><a href="">Smart switches</a></li>
                      <li><a href="">Smart Lights</a></li>
                      <li><a href="">Home automation</a></li>
                      <li><a href="">Smart locks</a></li>
                    </ul>
                  </div>
                  <div className="aa-sidebar-widget">
                    <h3>Tags</h3>
                    <div className="tag-cloud">
                      <a href="#">Technology</a>
                      <a href="#">Ecommerce</a>
                      <a href="#">Shop</a>
                      <a href="#">Trending</a>
                      <a href="#">Laptop</a>
                      <a href="#">Head Phone</a>
                      <a href="#">Pen Drive</a>
                    </div>
                  </div>
                  
                </aside>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
 
            </div>
        )
    }
}
export default Blog