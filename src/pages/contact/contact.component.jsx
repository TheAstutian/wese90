import React, {Component} from 'react';


const ContactUs = () => (
    <div>
        

        <div>
                <form className="contact-form" >
                        
                        <input  name="name" class="message-name" type="text" placeholder="Your Name" />

                        <input  name="email" class="message-email" type="email" placeholder="your@email.com" required  />
                        <textarea  name="message" class="message-input" type="text" placeholder="Please write your message here" required/>

                        <div className="button--container">
                            <button type="submit" className="button button-primary">Submit</button>
                        </div>
                </form>

        </div>

        <span>Doing business in Nigeria is not easy. The system is rusty and there’s a ton of obstacles to overcome before you can get things done. To be a successful entrepreneur, you need to be smart and more importantly, have the right connections. 

This is where Visita xxx comes in. As an xxx dealhunter/ seller or retailer based inside or outside of Lagos, you need a safe plug that is familiar with the terrain to handle your items. 

What we do is provide an ultra safe environment for your clients to come observe or pick up their packages. We cater to entities based in Lagos but our focus is on dealhunters outside Lagos. 

You can have your items delivered to our home/office address and have items dispatched to clients/customers directly from there. Or your clients can come around in person to pick up their items. We are pretty flexible like that. 

You'll also have the opportunity to advertise goods/items you have with us on this site. 
You can find us at computer village Ikeja, while home address is at alimosho

As a bonus, we run "FREE" escrow services. If you are having doubts about doing business with an individual, we can step in and smoothen things over. 

Let us help you solve your problems. We are only a call/text away.</span>
    </div>
)

export default ContactUs; 