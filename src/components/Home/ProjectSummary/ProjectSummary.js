import React from 'react'
import './ProjectSummary.css';

function ProjectSummary() {
    return (
        <div className="projectSummary-container">
            <div className="" style={{ width: '90%', margin: 'auto' }}>
                <h4 className="text-white text-center" style={{ fontWeight: '300', paddingTop: '40px' }}>SOME FUN FACTS ABOUT OUR AGENCY?</h4>
            </div>
            <div className="row p-5">
                <div className="col-md-3 text-center">
                    <h2 className="text-white">300+</h2>
                    <h4 className="text-white" style={{fontWeight:'400'}}>PROJECT COMPLETE</h4>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-white">99%</h2>
                    <h4 className="text-white" style={{fontWeight:'400'}}>POSITIVE FEEDBACK</h4>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-white">4</h2>
                    <h4 className="text-white" style={{fontWeight:'400'}}>YEAR OF ACTION</h4>
                </div>
                <div className="col-md-3 text-center">
                    <h2 className="text-white">$35</h2>
                    <h4 className="text-white" style={{fontWeight:'400'}}>HOURLY RATE</h4>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
