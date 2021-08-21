import React from 'react'

function Feature({data}) {
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="feature-box">
                <div className="image">
                    <img src={data.icon} style={{height:'80px'}} alt="" />
                </div>
                <div className="description" >
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
