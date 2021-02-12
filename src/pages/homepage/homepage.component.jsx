import React from 'react';
import Header from '../../components/header/header.component';
import {Link } from 'react-router-dom';
import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage-container'>
        <Header />
        
    <div className='first'>
        <span>Relax, local man's got you</span>
        <div className='ip'>
            <i><p>We provide a comfortable waiting space for your goods </p>
            <p>so that your life can be easier. </p> </i>
        </div>
    </div>
    
    <div className='second ash'>
        <div className='img'>
            <img alt='01' src='https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' />
        </div>
        <div className='txt'>
            <h2> Competent Warehousing</h2>
            <p>Our warehouse is like a coccoon for your goods to nest in, warm and secure. We simply make the journey from buyer to seller smooth and easy.</p>
            <p>And our added services will endear you to us. </p>
                <button><Link to='/warehouse'> Learn More</Link></button>

        </div>
    </div>

    <div className='second'>
        <div className='txt'>
            <h2>Fantastic Phone Deals</h2>
            <p>We offer premium iPhones and devices at the best rates hardly found in the country. Our goal is to get you the device you want, at the time you want it.</p>
            <p>We are also open to helping you market your products in our adverts page.</p>
            <button><Link to='/adspage'> Learn More</Link></button>
        </div>
        <div className='img'>
            <img alt='1' src='https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        </div>

    </div>

    <div className='second ash'>
        <div className='img'>
            <img alt='2' src='https://images.unsplash.com/photo-1588130721958-d1392d36ed94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        </div>
        <div className='txt'>
            <h2> Dependable Escrow</h2>
            <p> Facilitate your next business deal with our escrow service. It is tested and trusted, and it won't cost you a dime. </p>
            <button><a href="https://wa.link/0ia8aw">Do Deals</a></button>
        </div>

    </div>

    <div className='second'>
        
        <div className='txt'>
            <h2> Dispatch Service</h2>
            <p> Do you need to get your goods over to your customers? Look no further, we're your plug!</p>
            <p>We deliver packages from Lagos to anywhere in the country.</p>
            <button><Link to='/dispatch'> Learn More</Link></button>
        </div>

        <div className='img'>
            <img alt='3' src='https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1184&q=80' />
        </div>

    </div>

    <div className='second ash'>
        <div className='img'>
            <img alt='4' src='https://images.unsplash.com/photo-1562774555-079298a31cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80' />
        </div>
        <div className='txt'>
            <h2> iPhone Unlock</h2>
            <p> Is your iPhone locked? Are you blocked from using the phone? No shame, we can make it work again. </p>
            <p> Either with a chip or with no chip, dry bones shall rise again. </p>
            <button><a href="https://wa.link/no3b4t">Learn More</a></button>
        </div>

    </div>

    

    


    <div className='header-testimonials '>
        <h1> What Our Customers Say</h1>
        <div className='testimonial-container'>
            <div className='testimony'>
            <img alt='6' src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
            <a href="https://www.nairaland.com/5266068/thread-only-aliexpress-shopper/258#93036833"> <span>"Smooth and seamless transaction with a nairalander and Wese90 as Escrow.
                Wese90 is highly recommended as your escrow...I give him a 10/10 rating." </span></a>
            </div>
            <div className='testimony'>
                <img alt='7' src='https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
            <a href="https://www.nairaland.com/6065269/ps4-sale....sold#93019795"><span>"Just in case you're still doubting him, kindly visit the technology thread and ask about escrow services @wese90. Nah only God fit reward that guy."</span></a>
            </div>
            <div className='testimony'>
                <img alt='9' src='https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2834#92975096"><span>"@wese90, God bless you everyday for your selfless service. Its highly appreciated"</span></a>
            </div>
            <div className='testimony'>
                <img alt='8' src='https://images.unsplash.com/photo-1509325067210-e6b3643e817a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2808#92878686"><span>"I just completed a transaction with wizzy89. Facilitated by our able indaboski, president Wese90 as escrow. Transaction was very smooth. I appreciate you boss."</span></a>
            </div>
        </div>
    </div>

    <div className='about-us'>
    <div className='advert grey'>
       <span>Advertize with us!</span>
        <p>Do you have a great product you want to get out there?</p><p>Take advantage of our ad network to reach your target customers! </p>
        <button><Link to='/adspage'>Ad Page</Link></button>
       </div>

    </div>
    
</div>

);

export default HomePage; 