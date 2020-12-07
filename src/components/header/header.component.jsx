import React from 'react';
import Navigation from '../navigation/navigation.component';
import Button from '../button/button.component';
import './header.style.scss'; 

const Header = () => (
    <div className='header-container'>
        
      
        <div className="banner-image"
         style ={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2020/11/08/15/23/phone-5724015_1280.jpg'})`
          }} 
          />
        
        <div className='header-content'>
              <div className='header-title'>
            <span> Your </span>
            <span> Local Man</span>
            </div>
            <div>
            <span>Delivering smart solutions to your tech problems...</span>
            <Button>Learn More</Button>
            </div>
        </div>
      
      
    </div>
)

export default Header; 