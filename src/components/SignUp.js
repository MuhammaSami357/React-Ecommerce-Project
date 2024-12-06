import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (

    <>


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
        <input type="search" placeholder="Search-Something" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="icons">
      <i className="fa-regular fa-heart"></i>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </nav>



    <div className="outer-div">
 
 <div className="child-div">


 </div>
 <div className="inner-div">
   <h1>Create  an  account</h1>

   <h4>Enter your details below</h4>



   <div className="signup-form">
		
		<form>
			<div className="form-group">
				<label for="name">Name:</label>
				<input type="text" id="name" placeholder=""/>
			</div>
			<div className="form-group">
				<label for="email-phone">Email or Phone Number:</label>
				<input type="text" id="email-phone" placeholder=""/>
			</div>
			<div className="form-group">
				<label for="password">Password:</label>
				<input type="password" id="password" placeholder=""/>
			</div>
			<button type="submit" className="create-account-btn">Create Account</button>
			<p>or</p>
			<button className="google-signup-btn">Sign up with Google</button>
			<p>Already have an account? <Link to="/login">Login</Link></p>
		</form>
	</div>












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




    </>
  )
}

export default SignUp