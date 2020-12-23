import React from 'react';
import Footer from '../../components/footer/footer.component';
import './warehouse.style.scss'

const WareHouse = () => (
    <div className='div'>
        <h1>Worldclass Warehousing</h1>
        <div className='warehouse-content'>
            
        <span>Doing business in Nigeria is not easy. The system is rusty and there’s a ton of obstacles to overcome before you can get things done. To be a successful entrepreneur, you need to be smart and more importantly, have the right connections.  </span>
        <span>This is where we come in. As an xxx dealhunter/ seller or retailer based inside or outside of Lagos, you need a safe plug that is familiar with the terrain to handle your items. </span>
        
        <img src='https://images.unsplash.com/photo-1590247813693-5541d1c609fd' />
        <span>What we do is provide an ultra safe environment for your clients to come observe or pick up their packages. We cater to entities based in Lagos but our focus is on dealhunters outside Lagos. </span>
        <span>You can have your items delivered to our home/office address and have items dispatched to clients/customers directly from there. Or your clients can come around in person to pick up their items. We are pretty flexible like that. </span>

        <div className='bullets'>
        <ol>
                <li>Donec in lorem sit amet </li>
                <li>purus consequat cursus ut id lacus. </li>
                <li>Proin aliquam nisi sit amet leo euismod, </li>
                <li>eu blandit dolor venenatis. </li>
            </ol>
        </div>
        <span>Let us help you solve your problems. We are only a call/text away.</span>
        </div>
        <div className='pricing'>
            <span> Pricing</span>
            <div className='plans'>
            <div className='plan'>
                <h2>Basic plan</h2>
                <ul>
                    <li>Proin ipsum risus, interdum quis Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>14-day money back guarantee</li>
                </ul>
                <div className='thespan'><span> Price: $30/month</span></div>
                <button>Purchase</button>
            </div>
            <div className='plan gold'>
                <h2>Gold plan</h2>
                <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li> consectetur adipiscing elit. </li>
                <li>1 month money back guarantee</li>
                </ul>
                <div className='thespan'><span> Price: $50/month</span></div>
                <button>Purchase</button>
            </div>
            </div>
            
        </div>
        <div className='prefooter'><span>Let us help you solve your problems. We are only a call/text away.</span></div>
        
    </div>
    
)

export default WareHouse; 