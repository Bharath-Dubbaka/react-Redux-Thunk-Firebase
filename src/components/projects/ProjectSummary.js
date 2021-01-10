import React from 'react';
import moment from 'moment';

function ProjectSummary({project}) {
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content #37474f blue-grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary
