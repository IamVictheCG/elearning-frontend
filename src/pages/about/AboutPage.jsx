import React from 'react'
import './AboutPage.css'
import AboutList from './AboutList'
import users from './users.json'



function AboutPage() {
  return (
    <div className='ab'>
        <div className='abouthead'>
        <h2>About us</h2>
        </div>
        <h5>hellodcasd</h5>
        <AboutList userss={users}/> 
        
    </div>
    
    
    
  )
}

export default AboutPage;