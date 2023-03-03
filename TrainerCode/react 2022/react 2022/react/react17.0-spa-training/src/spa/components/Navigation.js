import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Link className='link' to="users">Users</Link>
            <p className='separator'>|</p>
            <Link className='link' to="about">About</Link>
        </div>
    );
}

export default Navigation;
