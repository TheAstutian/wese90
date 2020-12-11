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
    <Adverts />
    <div className='second ash'>
        <div className='img'>
            image part
        </div>
        <div className='txt'>
            <h2>Warehousing like never before</h2>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. </p>

        </div>
    </div>

    <div className='second'>
        <div className='txt'>
            <h2>Fantastic phone deals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='img'>
            image part
        </div>

    </div>

    <div className='second ash'>
        <div className='img'>
            Image part
        </div>
        <div className='txt'>
            <h2> Dependable escrow</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

    </div>


    <div className='header-testimonials'>
        <h1> Testimonials</h1>
        <div>
            <div>
            <img src='https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg' />
            <a href="https://www.nairaland.com/5266068/thread-only-aliexpress-shopper/258#93036833"> Smooth and seamless transaction with a nairalander and Wese90 as Escrow.
                Wese90 is highly recommended as your escrow...I give him a 10/10 rating.</a>
            </div>
            <div>
                <img src='https://actnow.training/wp-content/uploads/2020/03/8e798becf1500cddf92f7f2ec9be2b8b.jpg' />
            <a href="https://www.nairaland.com/6065269/ps4-sale....sold#93019795">Just in case you're still doubting him, kindly visit the technology thread and ask about escrow services @wese90. Nah only God fit reward that guy.</a>
            </div>
            <div>
                <img src='https://ivy-school.thimpress.com/demo-3/wp-content/uploads/learn-press-profile/5/2448c53ace919662a2b977d2be3a47c5.jpg' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2834#92975096">@wese90, God bless you everyday for your selfless service. Its highly appreciated</a>
            </div>
            <div>
                <img src='https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg' />
            <a href="https://www.nairaland.com/5032880/all-offerup-letgo-craigslist-5miles/2808#92878686">I just completed a transaction with wizzy89. Facilitated by our able indaboski, president Wese90 as escrow. Transaction was very smooth. I appreciate you boss.</a>
            </div>
        </div>
    </div>

    <Footer />
</div>

);

export default HomePage; 