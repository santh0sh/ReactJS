import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <button onClick={handleClick}>Go to home</button>
    );
}

export default Navigation;
