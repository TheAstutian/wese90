import React from 'react';
import Footer from '../../components/footer/footer.component';
import './warehouse.style.scss'

const WareHouse = () => (
    <div className='div'>
        <h1>World class Warehousing</h1>
        <div className='warehouse-content'>
            
        <span>Sed nisi purus, placerat non metus sed, convallis viverra neque. </span>
        <span>Proin ipsum risus, interdum quis ipsum eu, dignissim molestie lectus. Mauris vel accumsan tellus, ac maximus est. Donec vel lacus consectetur urna porta semper vel at nulla. Curabitur facilisis commodo diam id laoreet. Integer rhoncus tincidunt elit, in luctus ex fringilla in. Phasellus blandit, augue at convallis cursus, nulla arcu posuere nulla, ut consequat eros massa ut sapien. Mauris mollis, sapien ac finibus finibus, mauris leo luctus elit, id rutrum sapien ligula condimentum risus. Aliquam ligula urna, iaculis id dapibus ac, tristique condimentum nisi. Quisque auctor sem erat, at fringilla ex vehicula ut.</span>
        <img src='https://images.unsplash.com/photo-1590247813693-5541d1c609fd' />
        <span>Quisque urna lorem, iaculis feugiat sodales sit amet, ultrices sed elit. Aliquam venenatis mi in dui vestibulum bibendum. Duis ultrices nulla diam, in auctor lacus ullamcorper ut. Nullam maximus augue consectetur tellus tempus interdum. Donec ac neque varius elit auctor convallis. Nulla facilisi. Sed nec tempor libero. Aenean condimentum suscipit mi in luctus. Sed porttitor eget urna in mollis.</span>
        <div className='bullets'>
        <ol>
                <li>Donec in lorem sit amet </li>
                <li>purus consequat cursus ut id lacus. </li>
                <li>Proin aliquam nisi sit amet leo euismod, </li>
                <li>eu blandit dolor venenatis. </li>
            </ol>
        </div>
        <span>Sed vitae orci commodo, pretium lorem at, pretium quam. In nisi ante, dictum et pharetra sed, pulvinar eget felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur non justo massa. Aliquam non ante et est porta pellentesque. Nunc suscipit, odio ut bibendum dignissim, purus risus euismod risus, at aliquet quam metus eget libero. Duis sollicitudin justo mi, eget imperdiet eros pulvinar in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
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
            </div>
            </div>

        </div>
        <Footer />
    </div>
    
)

export default WareHouse; 