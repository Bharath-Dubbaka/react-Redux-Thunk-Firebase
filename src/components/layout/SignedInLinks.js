import React from 'react';
import {NavLink} from 'react-router-dom';



const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Create New</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating #f4511e deep-orange darken-1'>DB</NavLink></li>
        </ul>
    )
}



export default SignedInLinks;