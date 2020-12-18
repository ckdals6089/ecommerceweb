import React, { useState, useRef, useEffect } from 'react';
import 'boxicons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = () => setIsOpen(!isOpen)

    const navLink = document.querySelectorAll('.nav__link');
    const linkAction = () => {
        navLink.forEach(n => n[0].classList.remove('active'));
        this.classList.add('active')

        const navMenu = document.getEl

    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    return (
        <header className="header_box">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">BEN</a>
                </div>
                <div className={isOpen ? "nav__menu__show" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#feature" className="nav__link">Feature</a></li>
                        <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
                        <li className="nav__item"><a href="#subscribe" className="nav__link">Subscribe</a></li>
                    </ul>
                </div>
                <div>
                    <i className='bx bx-cart nav__cart'></i>
                    <i className='bx bx-menu nav__toggle' onClick={toggleNav}></i>
                </div>
            </nav>
        </header >
    )
}

export default Header;