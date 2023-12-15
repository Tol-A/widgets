import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaCalculator } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMdHome } from "react-icons/io";
import { GiConcentrationOrb } from "react-icons/gi";
import { CiViewTable } from "react-icons/ci";
import Hamburger from 'hamburger-react'


function Layout() {
  const [isOpen, setOpen] = useState(false)

  let burger = 'burger';
  if(isOpen ) {
    burger += ' burgerActive'
  }
  return (
    <div className='wrapper'>
      <header>
        <nav>
          <div className='logo'><Link to = '/'><GiConcentrationOrb/></Link></div>
          <div className='navLink'>
            <li><Link to = '/'><IoMdHome /> Home</Link></li>
            <li><Link to = '/weather'><TiWeatherSunny/> Weather forecast</Link></li>
            <li><Link to = '/table'><CiViewTable/> Table</Link></li>
            <li><Link to = '/calculate'><FaCalculator/> calculator</Link></li>
          </div> 
        </nav>
        <div className='mobileBurger'> 
          <Hamburger toggled={isOpen}  toggle={setOpen} rounded  />
        </div>
        <div  className= {burger}>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/weather'>Weather forecast</Link></li>
          <li><Link to = '/table'> Table</Link></li>
          <li><Link to = '/calculate'>Calculator</Link></li>
        </div>  
      </header>
      <main><Outlet/></main>
      <footer>footer</footer>
    </div>
   
     
  )
}

export default Layout

