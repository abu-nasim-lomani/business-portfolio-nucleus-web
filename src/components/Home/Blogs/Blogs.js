import React from 'react';
import blog1 from '../../../images/blog/style7/6.jpg'
import blog2 from '../../../images/blog/style7/2.jpg'
import blog3 from '../../../images/blog/style7/3.jpg'

function Blogs() {
    return (
        <div id="rs-blog" class="rs-blog style4 pt-100 pb-100 md-pt-70 md-pb-70">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class=" y-middle d-flex">
                        <div class="col-md-6 sm-mb-20">
                            <div class="sec-title">
                                <span class="sub-title primary right-line">LATEST NEWS</span>
                                <h2 class="title mb-0">Read Latest Updates</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="btn-part text-right sm-text-left">
                                <a class="readon2 submit-btn con-btn" href="blog-single.html">View Updates</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5 d-flex">
                       <div class="col-md-4 blog-item">
                           <div class="blog-wrap">
                               <div class="img-part">
                                   <a href="#"><img src={blog1} alt=""/></a>
                               </div>
                               <div class="blog-content">
                                   <a class="categories" href="blog-single.html">Digital Marketing</a>
                                   <h3 class="title"><a href="blog-single.html">Whale be raised, it must be in a month</a></h3>
                                   <div class="blog-meta">
                                       <div class="date">
                                           <i class="fa fa-clock-o"></i> 18 Jan 2021
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="col-md-4 blog-item">
                           <div class="blog-wrap">
                               <div class="img-part">
                                   <a href="#"><img src={blog2} alt=""/></a>
                               </div>
                               <div class="blog-content">
                                   <a class="categories" href="blog-single.html">Digital Marketing</a>
                                   <h3 class="title"><a href="blog-single.html">Career Tips For Emerging Photographers</a></h3>
                                   <div class="blog-meta">
                                       <div class="date">
                                           <i class="fa fa-clock-o"></i> 18 jan 2021
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="col-md-4 blog-item">
                           <div class="blog-wrap">
                               <div class="img-part">
                                   <a href="#"><img src={blog3} alt=""/></a>
                               </div>
                               <div class="blog-content">
                                   <a class="categories" href="blog-single.html">Digital Marketing</a>
                                   <h3 class="title"><a href="blog-single.html">Soundtrack filma Lady Exclusive Music</a></h3>
                                   <div class="blog-meta">
                                       <div class="date">
                                           <i class="fa fa-clock-o"></i> 20 jan 2021
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
    )
}

export default Blogs
