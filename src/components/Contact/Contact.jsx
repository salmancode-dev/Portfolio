
import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'

const Contact = () => {

  const [result, setResult] = useState("");   // ✅ Missing state added

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "749f7207-b2f3-4606-8788-8b4cf8c4cba5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> 
              <p>salmanmughal@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> 
              <p>+42 333-222-111</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> 
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label>Write your message here</label>
          <textarea name="message" rows={8} placeholder='Enter your message' required></textarea>

          <button type='submit' className="contact-submit">
            Submit Now
          </button>

          <p>{result}</p>   {/* ✅ Result message show karega */}
        </form>
      </div>
    </div>
  )
}

export default Contact