import React from 'react';
import { useParams } from 'react-router-dom';
//import useFetch from '../../components/hooks/useFetch';

const UserProfile = () => {
    const { id } = useParams();

    //useFetch()
    return (
        <div>
            <p>Profile #{id}</p>
        </div>
    );
}

export default UserProfile;
