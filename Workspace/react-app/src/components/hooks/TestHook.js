//useFetch -
// Auth.proxy, custom REST API invoker, dynamic themes
import { useState, useEffect } from 'react'

import useFetch from './useFetch'

const Testhook = (props) => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    const { loading, error, data = [] } = useFetch(url)
    if (error) return <p className='text-danger'>Error</p>
    if (loading) return <p className='text-danger'>loading ....</p>
    return (
        <div>
            <p>svfasfas</p>
            <ul>
                {data?.map((el, i) => (
                    <li key={i}>{el.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Testhook