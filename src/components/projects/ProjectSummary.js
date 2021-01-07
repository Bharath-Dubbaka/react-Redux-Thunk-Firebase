import React from 'react'

function ProjectSummary({project}) {
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content #37474f blue-grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by BratMan</p>
                    <p className="grey-text">3rd Jan</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
