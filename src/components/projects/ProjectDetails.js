import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum quia fugiat tenetur facere quas excepturi reiciendis maiores tempore, ut omnis officiis quod corrupti eveniet harum. Enim consequuntur soluta facilis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by BratMan</div>
                    <div>1st Jan</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
