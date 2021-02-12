import React from 'react'; 
import './about.style.scss';

const About = () =>(
    <div className='about-container'>
        <span>About Us</span>
        <div className='about-content'>
            <p>We are a group of talented individuals who are motivated and dedicated to solving problems in different forms, shapes and sizes. Each day, we meet our customers at the point of their need.</p>
            <p> We specialize in crafting efficient and cost effective logistic solutions customized to client's specific needs. This allows you to focus on core competencies and receive a logistical advantage over the competition through the use of our third party logistics services.</p>
            <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4026808209146!2d3.338572014504659!3d6.596772995229358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92270c000113%3A0x8082160dd280eab4!2sComputer%20Village!5e0!3m2!1sen!2sng!4v1613136313201!5m2!1sen!2sng" width="100%" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className='contacts'>
            <div className='contact'>
                <h3>Office Address:</h3>
                <p>Shop 45 Canaan Plaza,</p>
                <p>Close to UBA, Adepele Street, </p>
                <p>Computer Village,</p>
                <p>Ikeja, Lagos state.</p>
            </div>
            <div className='contact'>
                <h3> Warehouse Address:</h3>
                <p>Genesis Estate,</p>
                <p>Aboru, Iyana Ipaja</p>
                <p>Lagos, Nigeria.</p>
            </div>
            <div className='contact'>
                <h3>Telephone:</h3>
                <p> +2347065358057 , +2348161926496</p>
            </div>
            </div>
        </div>
    </div>
)

export default About;