import React from 'react';
import Feature from './Feature';
import './Features.css';
import icon2 from '../../../images/whychooseus/icon/ecommerce.png'
import icon1 from '../../../images/whychooseus/icon/flexible-cms.png'
import icon3 from '../../../images/whychooseus/icon/page-speed.png'
import icon4 from '../../../images/whychooseus/icon/responsive-design.png'

const featureData = [
    {
        id:1,
        icon: icon4,
        title: 'Responsive Design',
        description: 'Make your website responsive, your website will look great on all touch devices.Make your website responsive.'
    },
    {
        id:2,
        icon: icon3,
        title: 'Page Speed',
        description: 'Make your website lightning fast with high page speed and low page size. Get an instant feel.'
    },
    {
        id:3,
        icon: icon2,
        title: 'eCommerce',
        description: 'Build an eye-catchy eCommerce website with custom features to boost your business rapidly.        '
    },
    {
        id:4,
        icon: icon1,
        title: 'Flexible CMS',
        description: 'Manage your content easily and in a very flexible way with every customization option.'
    }
]

function Features() {
    return (
        <div className="features-container   m-auto">
            <div className="text-center pt-5">
                <h4 style={{fontWeight:'300', marginBottom:'10px'}}>WHY CHOOSE US</h4>
                <h2 style={{fontSize:'45px'}}>FEATURES</h2>
            </div>
            <div className="row  m-auto">
                {
                    featureData.map(data =><Feature data={data} key={featureData.id}></Feature>)
                }
            </div>

            <div className="text-center mt-5">
                <p style={{fontWeight:'600'}}>Increase your business success with technology. <a href="">Let’s get started</a></p>
            </div>
        </div>
    )
}

export default Features
