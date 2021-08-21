import React from 'react';
import './Slider.css';
import notebook from '../../../images/slider/solution/1st.png';
import workstation from '../../../images/slider/solution/2nd.png';

function Slider() {
    return (
        <div className='slider-container'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner row">
                    <div class="carousel-item active">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h4 className="text-white" style={{ fontWeight: '400' }}>MANAGE IT, SOFTWARE</h4>
                                    <h1 className="text-white">TOP NOTCHSOFTWARE</h1>
                                    <h3 className="text-white">DEVELOPMENT COMPANY</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={notebook} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row slide-part">
                            <div className="col-md-6 col-sm-12">
                                <div className="slide-des" style={{ textAlign: 'left', margin: 'auto', paddingLeft: '10%' }}>
                                    <h4 className="text-white" style={{ fontWeight: '400' }}>IT SOFTWARE & DESIGN</h4>
                                    <h1 className="text-white">LEADING IT AND SOFTWARE</h1>
                                    <h3 className="text-white">DEVELOPMENT COMPANY</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={workstation} className="slide-image" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Slider
