import React from 'react';
import './header.css';
import CTA from "./CTA";
import ME from '../../assets/santosh2.png';
import HeaderSocials from "./HeaderSocial"
const Header = () => {
  return (
    <header>
    <div className="container header_container">
     <h5>Hello I'm</h5>
      <h1>Santosh Yaadv</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>

      <HeaderSocials/>
      <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <a href="#conact" className='scroll__down'>Scroll Down</a>
   </div>
 </header>

 
  )
}

export default Header