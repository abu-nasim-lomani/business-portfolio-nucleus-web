import React from 'react';
import './About.css';
import about1 from '../../../images/about/solutions/1.jpg'
import about2 from '../../../images/about/solutions/2.png'
import about3 from '../../../images/about/solutions/3.png'

function About() {
    return (
        <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                                <span class="sub-title new pb-10">About Us</span>
                                <h2 class="title pb-20">We are crafting unique IT & Technology Ideas</h2>
                                <p class="margin-0">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                            </div>
                            <div id="accordion" class="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">Responsive & Pixel Perfect Design</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data communication.</div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Elementor Page Builder Used</a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo data center and analytics.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="images-part">
                                    <img src={about1} alt="Images"/>
                                </div>
                                <div class="rs-animations">
                                    <div class="spinner dot">
                                        <img class="scale" src={about2} alt="Images"/>
                                    </div>
                                    <div class="spinner ball">
                                        <img class="dance2" src={about3} alt="Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default About
