import React from 'react';
import './SkillSet.css';

function SkillSet() {
    return (
        <div class="rs-video style2 pt-5 mt-4 pb-5 mb-4" >
                <div class="container">
                    <div class="video-skill">
                        <div class="row margin-0">
                            <div class="col-lg-6 padding-0 md-mb-50">
                               <div class="skillsets-part">
                                   <div class="sec-title4 mb-40">
                                       <span class="sub-title white-color pb-15">Skillsets</span>
                                       <h2 class="title white-color">We have expert team with different skillsets</h2>
                                   </div>
                                   <div class="cl-skill-bar style2 solutions mt-5 mb-5">
                                       <span class="skillbar-title">Software Development</span>
                                       <div class="skillbar" data-percent="90">
                                           <p class="skillbar-bar" style={{width: '90%'}}></p>
                                           <span class="skill-bar-percent">90%</span> 
                                       </div>
                                       <span class="skillbar-title">Cloud Services</span>
                                       <div class="skillbar" data-percent="85">
                                           <p class="skillbar-bar" style={{width: '85%'}}></p>
                                           <span class="skill-bar-percent">85%</span> 
                                       </div>
                                       <span class="skillbar-title">Web Development</span>
                                       <div class="skillbar" data-percent="95">
                                           <p class="skillbar-bar" style={{width: '95%'}}></p>
                                           <span class="skill-bar-percent">95%</span> 
                                       </div>
                                   </div>
                                   <div class="btn-part mt-55">
                                       <a class="readon2 contact solutions" href="contact.html">Get Started</a>
                                   </div>
                               </div>
                            </div>
                            <div class="col-lg-6 padding-0">
                                <div class="video-wrap">
                                   <div class="video-btn primary text-center">
                                       <a class="popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                           <i class="fa fa-play"></i>
                                       </a>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SkillSet
