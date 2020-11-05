import React from 'react';

import Button from '../button/button.component';
import './navigation.style.scss';

const Navigation = () => (
    <div className='container'>
        <div className='title-container'>
            <span>Wese90</span>
        </div>
        
        <div className='nav-menus'>
            <div className='first'><p>How it works</p></div>
            <div className='second'> <Button>Contact Us</Button></div>
        </div>
    </div>
);
 
export default Navigation; 