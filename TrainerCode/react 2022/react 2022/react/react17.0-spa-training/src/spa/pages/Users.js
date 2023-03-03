import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

const Users = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log('Location', location.pathname);

    const handleClick = (userId) => {
        navigate(`/users/${userId}`);
    }

    return (
        <div className='users'>
            <h3>Users Page</h3>
            {!location.pathname.includes('/users/') && (
                <button className='user-link' onClick={() => handleClick('0123')}>
                    View User # 0123
                </button>
            )}
            <Outlet />
            <HomeButton />
        </div>
    );
}

export default Users;
