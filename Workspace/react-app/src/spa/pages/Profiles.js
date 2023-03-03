import React from 'react'
import { Outlet, useLocation,useNavigate } from 'react-router-dom'
import {HomeButton} from '../components/HomeButton'

const Profiles = () => {
    const navigate =useNavigate()
    const location = useLocation()
    console.log(`Current Location : ${location.pathname}`)
    const handleClick=(userId)=>{
        navigate(`/profiles/${userId}`)
    }
  return (
    <div className="bg-info users">
         <HomeButton/>
        <br/>
        <h2>Profiles</h2>
        <button className='user-link'
                onClick={()=>handleClick('101')}> View User of #101</button>
        <Outlet/>
    </div>
  )
}

export default Profiles