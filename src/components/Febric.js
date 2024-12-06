import React from 'react'
import { Link } from 'react-router-dom'
function Febric() {
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


    </div>
  )
}

export default Febric