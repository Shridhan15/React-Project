import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import arrow_icon from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a17a637-c0b7-428d-9824-5d10682271d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to react out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@university </li>
                <li><img src={phone_icon} alt="" />+91 99999 00000 </li>
                <li> <img src={loc_icon} alt="" />Model Toww, Gaziabad, Uttar Pradesh, India</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label htmlFor="">Write Your Message here </label>
                <textarea name="message" rows='6' placeholder='enter your message...' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={arrow_icon} alt="" /></button>

            </form>
            <span > {result} </span>

        </div>
    </div>
  )
}

export default Contact