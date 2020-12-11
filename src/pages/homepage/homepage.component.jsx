import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {Link } from 'react-router-dom';
import './homepage.style.scss';
import Adverts from '../../components/adverts/adverts.component';

const HomePage = () => (
    <div className='homepage-container'>
        <Header />
        
    <div className='first'>
        <span>Relax, local man's got you</span>
        <p>We connect ground-breaking technology with Life Storage's Storage
            
            asset management platform to provide a warehousing and 
            distribution solution never seen before in the industry. 
        </p>
    </div>
    
    <div className='second ash'>
        <div className='img'>
            <img src='https://images.unsplash.com/photo-1549194388-f61be84a6e9e' />
        </div>
        <div className='txt'>
            <h2>Warehousing like never before</h2>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. </p>
                <Link to='/warehouse'> <button>More details</button></Link>

        </div>
    </div>

    <div className='second'>
        <div className='txt'>
            <h2>Fantastic phone deals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to='/adspage'><button>Explore!</button></Link>
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
            <h2> Dependable escrow</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="https://wa.link/no3b4t"><button>Use this service!</button></a>
        </div>

    </div>


    <div className='header-testimonials'>
        <h1> Testimonials</h1>
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

    <Footer />
</div>

);

export default HomePage; 