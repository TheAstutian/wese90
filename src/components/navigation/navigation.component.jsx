import React from 'react';

import Button from '../button/button.component';
import './navigation.style.css';

const Navigation = () => (
    <div className='container'>
        <div className='title-container'>
            <h1>Wese90</h1>
        </div>
        
        <div className='nav-menus'>
            <div><p>How it works</p></div>
            <div> <Button>Contact Us</Button></div>
        </div>
    </div>
);

export default Navigation; 