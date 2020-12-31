import React from 'react';
import {Link } from 'react-router-dom';

import Button from '../button/button.component';
import './navigation.style.scss';

const Navigation = () => (
    <div className='container'>
        <div className='title-container'>
            <Link to='/'><span>Wese90</span></Link>
        </div>
        
        <div className='nav-menus'>
            <Link to='/warehouse'><div className='first'><p>How it works</p></div></Link>
            
            <Link to='/about'><div className='second'> <Button>About Us</Button></div></Link>
        </div>
    </div>
);
 
export default Navigation; 