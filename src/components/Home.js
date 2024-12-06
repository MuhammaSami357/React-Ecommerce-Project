import React from 'react'
import { Link } from 'react-router-dom'
function Home() {

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
        <div className="main-con">
          <div className="side-nav">






            <a className="nav-link dropdown-toggle" href="#" role="button" id='dropdown-menu' data-bs-toggle="dropdown" aria-expanded="false">
              Woman's Fashion
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item1" to="clothing">Clothing</Link></li>
              <li className="dropdown-divider"></li>
              <li><Link className="dropdown-item2" to="acessories">Acessories</Link></li>
              <li className="dropdown-divider"></li>
              <li><Link className="dropdown-item3" to="beauty"> Beauty & Personal Care </Link></li>
            </ul>




            <a className="nav-link dropdown-toggle" href="#" role="button" id='dropdown-menu-2' data-bs-toggle="dropdown" aria-expanded="false">
              Men's Fashion
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item4" to="shirts">Clothing</Link></li>
              <li className="dropdown-divider" ></li>
              <li><Link className="dropdown-item5" to="outwear">Acessories</Link></li>
              <li className="dropdown-divider"></li>
              <li><Link className="dropdown-item6" to="grooming"> Grooming </Link></li>
              <li className="dropdown-divider"></li>

              <li><Link className='dropdown-item7' to='shoes'>Shoes</Link> </li>
              <li className="dropdown-divider"></li>
              <li><Link className='dropdown-item8' to='jewelry ' > Jewelry  </Link> </li>
            </ul>



            <h6 className='pro-3'>Electronics </h6>

            <h6 className='pro-4'>Home & LifeStyle</h6>
            <h6 className='pro-5'>Medicines</h6>
            <h6 className='pro-6'>Sports & Outdoors</h6>
            <h6 className='pro-7'>Baby Treasures</h6>
            <h6 className='pro-8'> Groceries and Pets  </h6>
            <h6 className='pro-9'> Health & Beauty  </h6>

          </div>
          <div className="macbook">
            <div className="mac-div">
              <h3><i className="fa-brands fa-apple"></i>  Macbook  </h3>
              <h2>Up to 10% off Voucher</h2>
              <button>Shop Now</button>
            </div>
          </div>
        </div>



        <div className="flash-sales">
          <h6>Todays</h6>
          <h3>Flash Sales</h3>





          {/* product no 1  */}
          <div className="head-con">


            <div className="product-1">
              <div className="product-1-image">

              </div>
              <div className="product-1-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='currency-1'>Rs : $10</span>
                <button>Buy Now</button>
              </div>
            </div>

            {/* product no 2 */}




            <div className="product-2">
               <div className="product-2-image">

              </div>
              <div className="product-2-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='currency-2'>Rs : $10</span>
                <button>Buy Now</button>
              </div> 
            </div>

             {/* product no 3  */}


            <div className="product-3">
             <div className="product-3-image">

              </div>
              <div className="product-3-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='currency-3'>Rs : $10</span>
                <button>Buy Now</button>
              </div> 
            </div>

            {/* product no 4 */}
            <div className="product-4">
              <div className="product-4-image">

              </div>
              <div className="product-4-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='currency-4'>Rs : $10</span>
                <button>Buy Now</button>
              </div>
            </div>

          </div>
          <Link to = "products"> <button className='classic'> View All Products </button> </Link> 




          <div className="by-catagory">
            <h6>Catagories</h6>
            <h3>Browse By Catagory</h3>
<div className="main-cata">
<div className="mobile">
<i className="fa-solid fa-mobile-screen-button"></i>
 <p>Smartphones</p>
</div>
 <div className="laptop">
 <i className="fa-solid fa-laptop"></i>
  <p>  Laptops </p>
 </div>
<div className="camera">
<i className="fa-solid fa-camera"></i>
 <p>Cameras</p>
</div>
<div className="headphone">
<i className="fa-solid fa-headphones-simple"></i>
<p>Headphones</p>
</div>

<div className="gampad">
<i className="fa-solid fa-gamepad"></i>
<p>Gampad</p>
</div>
</div>
    
            </div>
            <div className="selling-pro">
         <h6>This Month</h6>
         <h3>Best selling Product</h3>
<div className="middle-box">

<div className="photo-1">
              <div className="photo-1-image">

              </div>
              <div className="photo-1-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='photo-1-currency'>Rs : $10</span>
                <button>Buy Now</button>
              </div>
            </div>


         




<div className="photo-2">
              <div className="photo-2-image">

              </div>
              <div className="photo-2-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='photo-2-currency'>Rs : $10</span>
                <button>Buy Now</button>
              </div>
            </div>


         


            <div className="photo-3">
               <div className="photo-3-image">

              </div>
              <div className="photo-3-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='photo-3-currency'>Rs : $10</span>
                <button>Buy Now</button>
              </div> 
            </div>


         




            <div className="photo-4">
              <div className="photo-4-image">

              </div>
              <div className="photo-4-details">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati?
                </p>
                <span className='photo-4-currency'>Rs : $10</span>
                <button>Buy Now</button>
              </div>
            </div>

</div>
         
<Link to = "viewMore"   ><button>View More</button>  </Link>  


</div>







         

        </div>



</div>       


      


</>
      )
}

      export default Home;








