import React from 'react';
import './Toolsbar.css'

function Toolsbar() {
    return (
        <div class="toolbar-area" style={{ borderBottom: '1px solid grey', color:'white' }}>
            <div class="row inner-tools-area" >
                <div className="col-md-2 toolsbar">
                    <ul className="text-left" style={{textAlign:'center'}}>
                        <li><a href="mailto:info@yourwebsite.com">support@rstheme.com</a></li>
                    </ul>
                </div>
                <div className="col-md-8 toolsbar" style={{borderLeft:'1px solid grey', borderRight:'1px solid grey'}}>
                    <ul className="d-flex justify-content-between">
                        <li><i class="fa fa-phone"></i><a href="tel:+123456789">(+123) 456789</a></li>
                        <li class="opening"> <i class="fa fa-clock-o"></i> Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends</li>
                    </ul>
                </div>
                <div className="col-md-2 toolsbar">
                    <ul className="d-flex justify-content-around">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Toolsbar
