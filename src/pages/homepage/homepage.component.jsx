import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {Link } from 'react-router-dom';
import './homepage.style.scss';
import Adverts from '../../components/adverts/adverts.component';
import ContactUs from '../contact/contact.component';

const HomePage = () => (
    <div className='homepage-container'>
        <Header />
        
    <div className='first'>
        <span>Relax, local man's got you</span>
        <i><p>We provide a comfortable waiting space for your goods </p>
        <p>so that your life can be easier. </p> </i>
    </div>
    
    <div className='second ash'>
        <div className='img'>
            <img src='https://images.unsplash.com/photo-1549194388-f61be84a6e9e' />
        </div>
        <div className='txt'>
            <h2> Competent Warehousing</h2>
            <p>Our warehouse is like a coccoon for your goods to nest in, warm and secure. We simply make the journey from buyer to seller smooth and easy.</p>
            <p>And our added services will endear you to us. </p>
                <Link to='/warehouse'> <button>Learn More</button></Link>

        </div>
    </div>

    <div className='second'>
        <div className='txt'>
            <h2>Fantastic Phone Deals</h2>
            <p>We offer premium iPhones and devices at the best rates hardly found in the country. Our goal is to get you the device you want, at the time you want it.</p>
            <p>We are also open to helping you market your products in our adverts page.</p>
                <Link to='/adspage'><button>Explore</button></Link>
        </div>
        <div className='img'>
            <img src='https://c1.wallpaperflare.com/preview/628/494/472/phone-iphone-apple-earbuds.jpg' />
        </div>

    </div>

    <div className='second ash'>
        <div className='img'>
            <img src='https://images.unsplash.com/photo-1588130721958-d1392d36ed94' />
        </div>
        <div className='txt'>
            <h2> Dependable Escrow</h2>
            <p> Facilitate your next business deal with our escrow service. It is tested and trusted, and it won't cost you a dime. </p>
            <a href="https://wa.link/no3b4t"><button>Do Deals</button></a>
        </div>

    </div>

    <div className='second'>
        
        <div className='txt'>
            <h2> Dispatch Service</h2>
            <p> Do you need to get your goods over to your customers? Look no further, we're your plug!</p>
            <p>We deliver packages from Lagos to anywhere in the country.</p>
            <Link to='/dispatch'><button>Send Packages</button></Link>
        </div>

        <div className='img'>
            <img src='https://images.unsplash.com/photo-1548695607-9c73430ba065' />
        </div>

    </div>

    <div className='second ash'>
        <div className='img'>
            <img src='https://images.unsplash.com/photo-1562774555-079298a31cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80' />
        </div>
        <div className='txt'>
            <h2> iPhone Unlock</h2>
            <p> Is your iPhone locked? Are you blocked from using the phone? No shame, we can make it work again. </p>
            <p> Either with a chip or with no chip, dry bones shall rise again. </p>
            <a href="https://wa.link/no3b4t"><button>Learn More</button></a>
        </div>

    </div>

    
       <div className='advert ash'>
       <span>Advertize with us!</span>
        <p>Do you have a great product you want to get out there?</p><p>Take advantage of our ad network to reach your target customers! </p>
        <Link to='/adspage'><button>Ad Page</button></Link>
       </div>
    


    <div className='header-testimonials '>
        <h1> What Our Customers Say</h1>
        <div className='testimonial-container'>
            <div className='testimony'>
            <img src='https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg' />
            <a href="https://www.nairaland.com/5266068/thread-only-aliexpress-shopper/258#93036833"> <span>"Smooth and seamless transaction with a nairalander and Wese90 as Escrow.
                Wese90 is highly recommended as your escrow...I give him a 10/10 rating." </span></a>
            </div>
            <div className='testimony'>
                <img src='https://actnow.training/wp-content/uploads/2020/03/8e798becf1500cddf92f7f2ec9be2b8b.jpg' />
            <a href="https://www.nairaland.com/6065269/ps4-sale....sold#93019795"><span>"Just in case you're still doubting him, kindly visit the technology thread and ask about escrow services @wese90. Nah only God fit reward that guy."</span></a>
            </div>
            <div className='testimony'>
                <img src='https://ivy-school.thimpress.com/demo-3/wp-content/uploads/learn-press-profile/5/2448c53ace919662a2b977d2be3a47c5.jpg' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2834#92975096"><span>"@wese90, God bless you everyday for your selfless service. Its highly appreciated"</span></a>
            </div>
            <div className='testimony'>
                <img src='https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2808#92878686"><span>"I just completed a transaction with wizzy89. Facilitated by our able indaboski, president Wese90 as escrow. Transaction was very smooth. I appreciate you boss."</span></a>
            </div>
        </div>
    </div>

    <div className='about-us'>
        <ContactUs />

    </div>
    
</div>

);

export default HomePage; 