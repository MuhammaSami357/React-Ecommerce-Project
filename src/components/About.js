import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    


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
        <li><Link  to='/signUp'>Sign Up</Link></li>
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

<div className="parent-con">
<div className="first-class">
<h1>Our Story</h1>
<p>

Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br/>
Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
</p>

</div>
<div className="second-class">


</div>

</div>




<div className="about-div">
  <div className="inner-1">
  <i class="fa-solid fa-house-user"></i>
  <h5>10.5k</h5>
  <p>Sallers active our site</p>
  </div>
  <div className="inner-2">
  <i class="fa-solid fa-dollar-sign"></i>
  <h5> 33k</h5>
  <p>Monthly product Sale</p>
  </div>
  <div className="inner-3">
  <i class="fa-solid fa-bag-shopping"></i>
  <h5>45.5k</h5>
  <p>Customer active our site</p>
  </div>
  <div className="inner-4">
  <i class="fa-solid fa-sack-dollar"></i>
  <h5>25k</h5>
  <p>Annual gross sale in <br/> our site</p>
  </div>

</div>




<div className="end-com">
   <div className="end-1">
  <i class="fa-solid fa-truck"></i>
  <h6>Free And Fast Delivery</h6>
  <p>Free delivery for all<br/> orders over $1430</p>
    </div>
    <div className="end-2">
    <i class="fa-solid fa-headphones-simple"></i>
    <h6>24/7 ciustomer service</h6>
    <p>friendly 24/7 customer support</p>
    </div>
    <div className="end-3">
    <i class="fa-sharp-duotone fa-solid fa-shield-halved"></i>
    <h6>Money Back Guarantee</h6>
    <p>we return money within 30 days</p>
    </div>
   
    
</div>





<div className="first-con">



<div id='sami' >
<h3>Exclusive</h3>
<h5>Subscribe</h5>
<p>Get 10% off your first order</p>
</div>


<div   id='awais'>
  <h5>Support</h5>



</div>

<div   id='haram'>
<h4>Account</h4>
<p>My Account</p>
<p>Login/Register</p>
<p>Cart</p>
<p>Wishlist</p>
<p>Shop</p>
</div>

<div id='quick-link'>
<h4>Quick Link</h4>
<p>Privacy Policy</p>
<p>Terms of Use</p>
<p>FAQ</p>
<p>Contact</p>
</div>

<div   id='qr-code'>
<h4>Download</h4>
<p>Save $3 with App New User Only</p>
<div className="code">
</div>

   </div>

</div>




  </div>
  )
}

export default About



































