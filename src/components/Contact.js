import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <div>
        <header className='top'>
          <p id='VIP'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <ul className='brought'>ShopNow</ul>

          <p id='IMP'>English</p>
        </header>







        <nav className="navbar">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>



          <ul className="nav-links">
            <li><Link to='/'>Home </Link>    </li>
            <li> <Link to='/about' > About</Link>               </li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/signUp'>Sign Up</Link></li>
          </ul>




          <div className="search-bar">
            <input type="search" placeholder="Search something" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className="icons">
            <i className="fa-regular fa-heart"></i>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </nav>




         <div className="contact-con">


          <div className="parent-key">


          <i className="fa-solid fa-phone"></i>
          <h6>Call To Us</h6>
          <h5>Phone:</h5>
          <p  id='my-id'>       We Are Avalible 24/7, 7 days a  week        </p><hr/>
          <i className="fa-regular fa-envelope"></i>

          <h6>Write To Us</h6>
          <p>
                Fill out our form and we will <br /> contact you within 24 hours.<br/> <pre/>

                Emails: customer@exclusive.com<br/>
Emails: support@exclusive.com 

              </p>
          </div>



          






         






          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Your Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Enter Message here:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="submit-btn" type="submit">Send Message</button>
            </form>
          </div>














        </div> 




      </div>
    </>
  )
}

export default Contact