import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { id } = useParams();

    return (
        <div>
            <p>Profile #{id}</p>
        </div>
    );
}

export default UserProfile;
