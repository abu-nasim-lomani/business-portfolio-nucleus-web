import React from 'react'
import logo from '../../../images/logo.png'
import sm1 from '../../../images/blog/small/1.jpg'
import sm2 from '../../../images/blog/small/2.jpg'
import sm3 from '../../../images/blog/small/3.jpg'

function Footer() {
    return (
        <div id="rs-footer" class="rs-footer style4">
            <div class="" style={{width: '90%', margin: 'auto'}}>
                <div class="footer-newsletter">
                    <div class="row y-middle">
                        <div class="col-md-6 sm-mb-26">
                            <h3 class="title white-color mb-0">Newsletter Subscribe</h3>
                        </div>
                        <div class="col-md-6 text-right">
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="Your email address" required=""/>
                                <button type="submit"><i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-62 pb-79 md-pb-64 sm-pt-48">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 footer-widget md-mb-39">
                            <div class="about-widget pr-15">
                                <div class="logo-part">
                                    <a href="index.html"><img src={logo} alt="Footer Logo"/></a>
                                </div>
                                <p class="desc">We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                <div class="btn-part">
                                    <a class="readon" href="about.html">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 md-mb-32 footer-widget">
                            <h4 class="widget-title">Contact Info</h4>
                            <ul class="address-widget pr-40">
                                <li>
                                    <i class="flaticon-location"></i>
                                    <div class="desc">374 William S Canning Blvd, Fall River MA 2721, USA</div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                        <a href="tel:+8801739753105">(+880)173-9753105</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-email"></i>
                                    <div class="desc">
                                        <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-clock"></i>
                                    <div class="desc">
                                        10:00 - 17:00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <h4 class="widget-title">Latest Posts</h4>
                            <div class="footer-post">
                                <div class="post-wrap mb-15">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src={sm1} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="blog-single.html">Covid-19 threatens the next generation of smartphones</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            September 6, 2019
                                        </div>
                                    </div>
                                </div>
                                <div class="post-wrap mb-15">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src={sm2} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="blog-single.html">Soundtrack filma Lady Exclusive Music</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            April 15, 2019
                                        </div>
                                    </div>
                                </div>
                                <div class="post-wrap">
                                    <div class="post-img">
                                        <a href="blog-single.html"><img src={sm3} alt=""/></a>
                                    </div>
                                    <div class="post-desc">
                                        <a href="blog-single.html">Winged moved stars, fruit creature seed night.</a>
                                        <div class="date-post">
                                            <i class="fa fa-calendar"></i>
                                            October 9, 2019
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row y-middle">
                        <div class="col-lg-6 col-md-8 sm-mb-21">
                            <div class="copyright">
                                <p>© Copyright 2021 Reobiz. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-4 text-right sm-text-center">
                            <ul class="footer-social">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
