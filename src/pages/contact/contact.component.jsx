import React, {useState} from 'react';


const ContactUs = () => {
    
    const [data, setData] = useState({name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: ''});

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({...data,
        [name]: value
        })
    }


    return (
        <div>
        

        <div>
                <form className="contact-form" >
                        
                        <input  name="name" class="message-name" type="text" placeholder="Your Name" />

                        <input  name="email" class="message-email" type="email" placeholder="your@email.com" required  />
                        <textarea  name="message" class="message-input" type="text" placeholder="Please write your message here" required/>

                        <div className="button--container">
                            <button type="submit" className="button">Submit</button>
                        </div>
                </form>

        </div>

       
    </div>
    )
}
    
    


export default ContactUs; 