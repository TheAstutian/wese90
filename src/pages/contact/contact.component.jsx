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
                        
                        <input required id='full-name' name="name" value={data.name} onChange={handleChange} type="text" placeholder="Full name" />

                        <input required id='email' name="email"  type="email" placeholder="your@email.com" value={data.email} onChange={handleChange}  />
                        <textarea required name="message" class="message-input" type="text" placeholder="Please write your message here" value={data.message} onChange={handleChange}/>

                        <div className="button--container">
                            <button type="submit" className="button">Submit</button>
                        </div>
                </form>

        </div>

       
    </div>
    )
}
    
    


export default ContactUs; 