import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky,setSticky]=useState(false)

    // for trasition on background color of Navbar
    useEffect(()=>{
        // 50 means when we scroll 50px
        window.addEventListener('scroll',()=>{
            window.scrollY>50 ? setSticky(true) : setSticky(false)
        })
    },[])

    const [mobileMenu,setMobileMenu]=useState(false)
    const toggleMenu=()=>{
        mobileMenu? setMobileMenu(false): setMobileMenu(true);

    }

  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
        <img className='logo' src={logo} alt="" />
        <ul className={mobileMenu?' ': 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us </Link> </li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar