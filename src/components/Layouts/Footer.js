import React, {useState} from 'react'
import './Footer.css'
import {ReactComponent as Facebook} from '../UI/icons/facebook.svg'
import {ReactComponent as Twitter} from '../UI/icons/twitter.svg'
import {ReactComponent as Instagram} from '../UI/icons/instagram.svg'

function Footer() {
  const[email, setEmail] = useState("")

  const handleChange = (e)=>{
    setEmail(e.target.value)
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    fetch('https://apple-products-5cd30-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        emailId:email
      })
     }
  )
  .then(res =>res.json())
  .then(data =>{
    console.log('data:' , data)
  })
  setEmail('')
  }

  return (
    <div className='footer'>
      <div className='footer-header'>
        <div className='footer-header-item'>
        &#127793; plants grow people
        </div>
        <div className='footer-header-item'>
        &#127793; plants grow people
        </div>
        <div className='footer-header-item'>
        &#127793; plants grow people
        </div>
        <div className='footer-header-item'>
        &#127793; plants grow people
        </div>
      </div>
      <div className='footer-container'>
        <div className='footer-section footer-section-left col-sm-12'>
          <div className='footer-section-column'>
            <p className='footer-section-column-head'>ABOUT US</p>
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Locate Stores</p>
          </div>
          <div className='footer-section-column'>
            <p className='footer-section-column-head'>CUSTOMER CARE</p>
            <p>Track Order</p>
            <p>Shipping Policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Refund policy</p>
          </div>
          <div className='footer-section-column'>
            <p className='footer-section-column-head'>OFFERS</p>
            <p>Plant Parent Club</p>
            <p>Ugaoo Coupons</p>
          </div>
        </div>
        <div className='footer-section footer-section-right'>
          <div className='footer-section-column'>
            <p className='footer-section-column-head'>
              SIGN UP FOR OUR NEWSLETTER   
            </p>
              For plant care tips, our featured plant of <br></br> the week, exclusive offers and discounts

            <p className='footer-section-column-head follow-us-container'>
              FOLLOW US ON SOCIAL MEDIA
            </p>
            <div className='social-icons'>
              <Facebook width='20px' />
              <Twitter width='20px' />
              <Instagram width='20px' />
            </div>
            <div className="email-section">
            <h5 > Get In Touch</h5>
              <form onSubmit={handleSubmit}> 
            
              <input type='text' placeholder="Your Email" value={email} onChange={handleChange} className="email-input"></input>
              <button className="subscribe-btn">Subscribe</button>
              
              </form>
              </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        Made with ❤️ by Sarfraz 
      </div>

    </div>
  )
}

export default Footer