import React from 'react';
import './warehouse.style.scss'

const WareHouse = () => ( 
    <div className='div'>
        <h1>Worldclass Warehousing</h1>
        <div className='warehouse-content'>
            
        <span>Doing business in Nigeria is not easy. The system is rusty and there’s a ton of obstacles to overcome before you can get things done. To be a successful entrepreneur, you need to be smart and more importantly, have the right connections.  </span>
        <span>This is where we come in. As a dealhunter/ seller or retailer based inside or outside of Lagos, you need a safe plug that is familiar with the terrain to handle your items. </span>
        
        <img alt='' src='https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1084&q=80' />
        <span>What we do is provide an ultra safe environment for your clients to come observe or pick up their packages. We cater to entities based in Lagos but our focus is on dealhunters outside Lagos. </span>
        <span>You can have your items delivered to our home/office address and have items dispatched to clients/customers directly from there. Or your clients can come around in person to pick up their items. We are pretty flexible like that. </span>

        <span>Let us help you solve your problems. We are only a call/text away.</span>
        </div>
        <div className='pricing'>
            <span> Pricing</span>
            <div className='plans'>
            <div className='plan'>
                <h2>Basic plan</h2>
                <ul>
                    <li>Basic storage space</li>
                    <li>Discount on number of items</li>
                    <li>Free ad on Wese90</li>
                    <li>Pickup by customer</li>
                    
                </ul>
                <div className='thespan'><span> Price: N500/item</span></div>
                
            </div>
            <div className='plan gold'>
                <h2>Gold plan</h2>
                <ul>
                <li>Unlimited storage space</li>
                <li>Free ad on Wese90</li>
                <li>Drop shipping</li>
                <li>Pickup by customer</li>
                <li>Post-pickup/customer care service</li>
                <li>Discounted delivery to customer  </li>
                
                </ul>
                <div className='thespan'><span> Price: N10,000/month</span></div>
                
            </div>
            </div>
            
        </div>
        <div className='prefooter'>
                <span>Note: These terms and prices are prone to changes and this page will be updated accordingly.
                    Furthermore, we are pretty flexible so if these plans don't fit, talk to us!
                </span>
                <span>Let us help you solve your problems. We are only a call/text away.</span>
        </div>
        
    </div>
    
)

export default WareHouse; 