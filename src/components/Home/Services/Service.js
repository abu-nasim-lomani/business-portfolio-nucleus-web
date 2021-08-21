import React from 'react'

function Service({data}) {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="service-box">
                <div className="icon-part">
                    <img src={data.icon} style={{ Width: '85%' }} alt="" />
                </div>
                <div className="details-part ml-2">
                    <h4 style={{marginBottom:'5px'}}>{data.name}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Service;