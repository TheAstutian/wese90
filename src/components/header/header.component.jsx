import React from 'react';
import Navigation from '../navigation/navigation.component';
import Button from '../button/button.component';
const Header = () => (
    <div>
        <Navigation />
      <div>
        <div class="banner-image"/>
      <div>
      <span> Your <br /> Local Man</span>
      </div>
      <div>
      <span>Delivering smart solutions to your tech problems...</span>
      <Button>Learn More</Button>
      </div>
      </div>
    </div>
)

export default Header; 