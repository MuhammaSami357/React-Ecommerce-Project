
// import React from 'react'
// // import { useEffect, useState } from 'react'
// function Jewelry() {
// // const [count,setCount] = useState(0);
// // const [total,setTotal] = useState(1);

// // const handleToClick = () => {
// //   setCount(count+1);
// // }
// // const handleUpClick = () => {
// //   setTotal(total+1);
// // }

// // useEffect
// // first => side effect function
// // second => cleanup function 
// // third => comma separated dep list
  
// // variation: 1
// // runs on every render 
// //  useEffect(() => {
// //    alert("i will run on each render")
// //  })

// // variation:2 
// // it will run on single render 
// // useEffect(() =>{  
// // alert('i will run on single render');
// // }, [])

// // variation :3
// // useEffect(() => {
// //  alert("i will run on everytime when count is updated ")
 
// // }, [count, total])


//   return (
// //     <> 

// // <div>
// //   <button  onClick={handleToClick}>Click here

// //   <br/>
// //   count : {count}
// //   </button>
// //   <button  onClick={handleUpClick}> update toatal

// // <br/>
// // total : {total}
// // </button>

// // </div>
// {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
// <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
// <>

// </>
//   )
// }

// export default Jewelry


import React from 'react'
import { Link } from 'react-router-dom'
function Jewelry() {



 
       

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

export default Jewelry