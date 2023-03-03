import './SpaApp.css'
import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profiles from './pages/Profiles'
import UserProfile from './pages/Profiles'
import Dynamic from './pages/Dynamic'

//rafce
const SpaApp = () => {
  return (
    <div className='App'>
        <h1 className='bg-info text warning'> Hello World with SPA </h1>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='profiles' element={<Profiles/>}>
                <Route path=':id' element={<UserProfile/>}/>
            </Route>
            <Route path="dynamic" element={<Dynamic/>}/>
        </Routes>
     
    </div>
  )
}

export default SpaApp