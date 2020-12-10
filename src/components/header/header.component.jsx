import React from 'react';
import {Link } from 'react-router-dom';
import Button from '../button/button.component';
import './header.style.scss'; 

const Header = () => (
    <div className='header-container'>
        
      
        <div className="banner-image"
         style ={{
          backgroundImage: `url(${'https://images.unsplash.com/photo-1569040029205-a03a8b455808'})`
          }} 
          />
        
        <div className='header-content'>
              <div className='header-title'>
              <span> Your </span>
              <span> Local Man</span>
              </div>
              <div className='header-txtbtn'>
              <span>Delivering smart solutions to</span><span> enterprise problems...</span>
              <Link to='/warehouse'><Button>Learn More</Button></Link>
              </div>
        </div>
      
      
    </div>
)

export default Header; 