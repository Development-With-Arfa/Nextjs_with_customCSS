'use client'

import React from 'react';
import {useState} from 'react';
import Image from 'next/image';

 
const Nav = () => {

  const [isMenuOpen,setIsMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  

  return (
    <nav className="navbar">
        <h1 className="logo">ADVENTURES</h1>
        <ul className="nav-links">
            <li className="active"><a href="#"></a>Home</li>
            <li><a href="#"></a>Tours</li>
            <li><a href="#"></a>Explore</li>
            <li><a href="#"></a>About</li>
            <li className="ctn"><a href="#"></a>Contact</li>
        </ul>

        <button className="img-btn" onClick={toggleMenu}>
          <Image src="/menu-btn.png" alt="btn" height={10} width={10} className='menu-btn' />
        </button>

        {isMenuOpen ? (
          <ul className="nav-link">
            <li className="active"><a href="#"></a>Home</li>
            <li><a href="#"></a>Tours</li>
            <li><a href="#"></a>Explore</li>
            <li><a href="#"></a>About</li>
            <li className="ctn"><a href="#"></a>Contact</li>
        </ul>
        ) :null}
        
       
    </nav>
  )
}

export default Nav;