import axios from 'axios';
import React, {useState} from 'react';


const ContactUs = () => {
    
    const [data, setData] = useState({name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: ''});

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData({...data,
        [name]: value
        })
    }

    
    const formSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            buttonText: 'Sending...'
        })

        axios.post('/api/sendmail', data)
        .then( res => {
            if (res.data.result !== 'success'){
                setData({
                    ...data,
                    buttonText: 'Failed to send',
                    sent: false,
                    err: 'fail'
                })
                setTimeout (()=> {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Sent',
                    err: 'success'
                })
                setTimeout(()=>{
                    resetForm();
                }, 6000)
            }

        }).catch( (err) => {
            setData({
                ...data,
                buttonText: 'Failed to send',
                err: 'fail'
            })
        })
    }

    return (
        <div>
        

        <div>
                <form className="contact-form" >
                        
                        <input required id='full-name' name="name" value={data.name} onChange={handleChange} type="text" placeholder="your full name" />

                        <input required id='email' name="email"  type="email" placeholder="your email address" value={data.email} onChange={handleChange}  />
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