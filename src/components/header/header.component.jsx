import React from 'react';
import Navigation from '../navigation/navigation.component';
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
              <span>Delivering smart solutions to</span><span> your tech problems...</span>
              <Button>Learn More</Button>
              </div>
        </div>
      
      
    </div>
)

export default Header; 